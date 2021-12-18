import React, { ReactElement, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { postHabit } from "../../services/habits";
import { useCategoryValue } from "../../context/CategoryContext";

interface Props {
  isOpen: boolean;
  onClose: any;
}

export default function NewHabitModal({
  isOpen,
  onClose,
}: Props): ReactElement {
  const [habitData, setHabitData] = useState({
    title: "",
    description: "",
    category: "",
  });
  const initialRef = React.useRef();
  const { categories } = useCategoryValue();

  const handleInputChange = ({ target: { name, value } }) => {
    setHabitData((oldHabit) => ({
      ...oldHabit,
      [name]: value,
    }));
  };
  const handleNewHabit = () => {
    console.log("habit data", habitData);
    // Save to API
    postHabit(habitData);

    // Close modal
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent height="90vh">
        <ModalHeader>Add new habit</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Title</FormLabel>
            <Input
              ref={initialRef}
              placeholder="Brush teeth"
              name="title"
              value={habitData.title}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Description</FormLabel>
            <Input
              ref={initialRef}
              placeholder=""
              name="description"
              value={habitData.description}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select
              placeholder="Select a category..."
              name="category"
              value={habitData.category}
              onChange={handleInputChange}
            >
              {categories.map((category) => (
                <option value={category.id}>{category.attributes.name}</option>
              ))}
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button width="100%" onClick={handleNewHabit}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
