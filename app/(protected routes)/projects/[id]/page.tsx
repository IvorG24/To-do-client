"use client";
import React from "react";
import Droppable from "./modules/droppable";

const KanbanBoard = () => {
  return (
    <section className="flex items-start gap-x-6">
      <Droppable />
    </section>
  );
};

export default KanbanBoard;
