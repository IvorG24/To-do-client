import React from "react";
import Link from "next/link";
interface DashboardCardProps {
  id: number;
  title: string;
}
const DashboardCard = ({ id, title }: DashboardCardProps) => {
  return (
    <>
      <Link
        className="max-w-sm w-full hover:bg-slate-900 h-28 border-2 border-primary rounded-xl flex items-end justify-end p-4"
        href={`/projects/${id}`}
        key={id}
      >
        <div>
          <h1>{title}</h1>
        </div>
      </Link>
    </>
  );
};

export default DashboardCard;
