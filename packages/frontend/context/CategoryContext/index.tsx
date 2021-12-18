import React, { createContext, useContext, useEffect, useState } from "react";
import useSWR from "swr";
import API from "../../constants/api";
import { getAllCategories } from "../../services/categories";

export type CategoryData = {
  id: number;
  attributes: {
    name: string;
    description: string;
    order: number;
    createdAt: string;
    updatedAt: string;
  };
};

const CATEGORY_DEFAULT_CONTEXT: CategoryData[] = [];

export const CategoryContext = createContext({
  categories: CATEGORY_DEFAULT_CONTEXT,
  currentCategory: -1,
  changeCategory: null,
});

export const CategoryProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState(-1);
  const { data: categories, error } = useSWR(API.categories, getAllCategories);

  const changeCategory = (newCategory: number) => {
    setCurrentCategory(newCategory);
  };

  return (
    <CategoryContext.Provider
      value={{
        categories: !categories ? [] : categories.data,
        currentCategory,
        changeCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryValue = () => useContext(CategoryContext);
