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
  //   setCategories: null,
});

export const CategoryProvider = ({ children }) => {
  const { data: categories, error } = useSWR(API.categories, getAllCategories);

  return (
    <CategoryContext.Provider
      value={{
        categories: categories.data ?? [],
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryValue = () => useContext(CategoryContext);
