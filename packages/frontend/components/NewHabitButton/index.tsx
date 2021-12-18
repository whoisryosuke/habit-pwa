import { Button, useDisclosure } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import NewHabitModal from "../NewHabitModal";

interface Props {}

export default function NewHabitButton({}: Props): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button size="3xl" width={150} onClick={onOpen}>
        +
      </Button>
      <NewHabitModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
