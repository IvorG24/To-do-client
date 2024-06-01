import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TaskCard from "./taskcard";
import { KanbanSections, KanbanItems } from "@/lib/data";
import PopoverDrag from "./popoverdrag";
import Addcardform from "./addcardform";
import Addboardform from "./addboardform";

interface Task {
  id: string;
  content: string;
  status: string;
}

const Droppable = () => {
  const [tasks, setTasks] = useState<Task[]>(KanbanItems);
  const [dropTarget, setDropTarget] = useState<string | null>(null);

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    status: string
  ) => {
    const taskId = event.dataTransfer.getData("text/plain");

    // Check if the dropped status is valid
    const isValidSection = KanbanSections.some(
      (section) => section.status === status
    );

    if (isValidSection) {
      setDropTarget(null);
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      );
      setTasks(updatedTasks);
      // Reset drop target after drop
    }
  };

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    id: string
  ) => {
    event.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (
    event: React.DragEvent<HTMLDivElement>,
    status: string
  ) => {
    event.preventDefault();

    // Check if the dragged item is over a valid section status
    const isValidSection = KanbanSections.some(
      (section) => section.status === status
    );

    if (isValidSection) {
      setDropTarget(status); // Set the current drop target
    } else {
      setDropTarget(null); // Reset drop target if outside valid sections
    }
  };

  return (
    <div className="flex gap-4 items-start">
      {KanbanSections.map((section) => (
        <div
          key={section.status}
          className="w-[39.5vh] h-auto flex-grow-0 bg-neutral-100 dark:bg-neutral-900 p-6 rounded-lg relative"
          onDragOver={(event) => handleDragOver(event, section.status)}
          onDrop={(event) => handleDrop(event, section.status)}
        >
          <PopoverDrag titleProps={section.title} />
          <ScrollArea className="h-auto">
            {dropTarget === section.status && (
              <div className=" h-32 w-full rounded-lg bg-gray-400 dark:bg-gray-700 opacity-50 pointer-events-none shadow-md"></div>
            )}
            {tasks
              .filter((task) => task.status === section.status)
              .map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  onDragStart={handleDragStart}
                />
              ))}
          </ScrollArea>
          <Addcardform />
        </div>
      ))}
      <Addboardform />
    </div>
  );
};

export default Droppable;
