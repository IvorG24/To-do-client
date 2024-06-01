import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { RxDotsHorizontal } from "react-icons/rx";
interface PopoverDragProps {
  titleProps: string;
}
const PopoverDrag = ({ titleProps }: PopoverDragProps) => {
  return (
    <>
      <div className="flex justify-between items-start">
        <h1 className="text-2xl pb-4">{titleProps}</h1>
        <Popover>
          <PopoverTrigger>
            <RxDotsHorizontal />
          </PopoverTrigger>
          <PopoverContent className="w-auto flex flex-col items-start gap-y-4">
            <button className="px-4">Edit</button>
            <button className="px-4">Delete</button>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default PopoverDrag;
