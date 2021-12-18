import React, { ReactElement } from "react";
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
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: any;
}

export default function NewHabitModal({
  isOpen,
  onClose,
}: Props): ReactElement {
  const initialRef = React.useRef();
  // @TODO: Function for new habit
  // @TODO: Create context provider for categories, use hook here to get them
  // @TODO: Create dropdown of categories
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent height="90vh">
        <ModalHeader>Add new habit</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input ref={initialRef} placeholder="Name" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Category</FormLabel>
            <Input placeholder="Last name" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button width="100%">Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
