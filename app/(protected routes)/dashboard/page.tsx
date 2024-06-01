import React from "react";
import { TabsContent } from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardProjectList from "./modules/dashboardproject";

const Dashboard = () => {
  return (
    <>
      <ScrollArea className="h-[800px] w-full">
        <TabsContent className="flex flex-col gap-8" value="projects">
          <DashboardProjectList />
        </TabsContent>
        <TabsContent value="settings">Hello qeweasdzxczas</TabsContent>
      </ScrollArea>
    </>
  );
};

export default Dashboard;
