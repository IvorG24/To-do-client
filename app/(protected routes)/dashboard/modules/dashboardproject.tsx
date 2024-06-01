import React from "react";
import Link from "next/link";
import { DashboardProject } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DashboardCard from "./dashboardcard";
const DashboardProjectList = () => {
  return (
    <>
      <section className="space-y-4" id="projects">
        <h1 className="text-2xl font-semibold">Recently viewed</h1>
        <div className="flex flex-wrap gap-6">
          {DashboardProject.map((item) => (
            <DashboardCard key={item.id} id={item.id} title={item.title} />
          ))}
        </div>
      </section>
      {/* soon make this a component for cleaner more maintanable code */}
      <section className="space-y-4" id="workarea">
        <h1 className="text-2xl font-semibold">YOUR WORKAREA</h1>
        <div className=" flex mr-10 justify-between">
          <div className="flex items-center gap-x-4">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="text-xl">Ivor</h2>
          </div>

          <div className="flex items-center gap-6">
            <Link
              className="px-4 bg-muted py-2 rounded-sm hover:bg-slate-700 duration-150"
              href={"/dashboard"}
            >
              Members(1)
            </Link>

            <Link
              className="px-4 bg-muted py-2 rounded-sm hover:bg-slate-700 duration-150"
              href={"/dashboard"}
            >
              Settings(1)
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          {DashboardProject.map((item) => (
            <DashboardCard key={item.id} id={item.id} title={item.title} />
          ))}
        </div>
      </section>
    </>
  );
};

export default DashboardProjectList;
