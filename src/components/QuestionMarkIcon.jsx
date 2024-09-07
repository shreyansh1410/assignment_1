import React from "react";
import { Tooltip, IconButton } from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

function QuestionMarkIcon() {
  return (
    <Tooltip label="Help">
      <IconButton
        aria-label="Help"
        icon={<QuestionOutlineIcon />}
        size="sm"
        variant="ghost"
        colorScheme="whiteAlpha"
      />
    </Tooltip>
  );
}

export default QuestionMarkIcon;
