import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
interface TaskCardProps {
  id: string;
  content: string;
  onDragStart: (event: React.DragEvent<HTMLElement>, id: string) => void;
}

const TaskCard = ({ id, content, onDragStart }: TaskCardProps) => {
  const handleDragStart = (event: React.DragEvent<HTMLElement>) => {
    onDragStart(event, id);
  };

  return (
    <Dialog>
      <DialogTrigger
        className="border-2 bg-muted border-black dark:border-white w-full flex justify-end items-end h-32 my-4 z-[999] rounded-lg p-4"
        draggable
        onDragStart={handleDragStart}
      >
        {content}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle>Card Name</DialogTitle>
          <p>in list Name of list</p>

          <DialogTitle>Description</DialogTitle>
          <DialogDescription>
            <div className="w-full border-2 p-4 hover:bg-slate-900 duration-150 rounded-lg cursor-pointer flex h-20">
              Enter what description do you want
            </div>
          </DialogDescription>

          <DialogTitle>Activity</DialogTitle>
          <DialogDescription className="flex  items-center gap-x-2">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="w-full border-2 p-4 hover:bg-slate-900 duration-150 rounded-lg cursor-pointer flex ">
              Write a comment ...
            </div>
          </DialogDescription>

          <DialogDescription className="flex items-center gap-x-2">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="">
              <span className="font-bold text-white">Ivor Glorioso </span>
              <span>added this card to To Do</span>
              <p className="">yesterday at 6:11 PM</p>
            </div>
          </DialogDescription>
          <DialogDescription className="flex items-center gap-x-2">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="">
              <span className="font-bold text-white">Ivor Glorioso </span>
              <span>added this card to To Do</span>
              <p className="">yesterday at 6:11 PM</p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TaskCard;
