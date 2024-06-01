export const KanbanSections = [
  { status: "todo", title: "To Do" },
  { status: "inProgress", title: "In Progress" },
  { status: "done", title: "Done" },
];

export const KanbanItems = [
  { id: "task-1", content: "Task 1", status: "todo" },
  { id: "task-2", content: "Task 2", status: "todo" },
  { id: "task-3", content: "Task 3", status: "inProgress" },
  { id: "task-4", content: "Task 4", status: "inProgress" },
  { id: "task-5", content: "Task 5", status: "review" },
  { id: "task-6", content: "Task 6", status: "done" },
];

export const DashboardProject = [
  {
    id: 1,
    title: "The Gesture Controlled Gloves Project 1",
  },
  {
    id: 2,
    title: "The Gesture Controlled Gloves Project 2",
  },
  {
    id: 3,
    title: "The Gesture Controlled Gloves Project 3",
  },
];

export const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
