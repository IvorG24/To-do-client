"use client";
import React from "react";
import Link from "next/link";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signout } from "@/services/users/register";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const tabs = ["Projects", "Settings", "Home"];
const workspaces = ["Apexpoint", "FormApp", "Codebility"];

const DashboardHeader = () => (
  <section className="col-span-1 h-screen p-10 space-y-4">
    <TabsList className="space-y-2">
      {tabs.map((tab) => (
        <Link key={tab} href="/dashboard">
          <TabsTrigger value={tab.toLowerCase()}>{tab}</TabsTrigger>
        </Link>
      ))}
      <Link href="/auth/login" onClick={signout}>
        <TabsTrigger value="signout">Sign Out</TabsTrigger>
      </Link>
    </TabsList>
    <Separator />
    <TabsList className="space-y-2">
      <h1>Workspaces</h1>
      {workspaces.map((workspace) => (
        <Link key={workspace} href="/dashboard">
          <TabsTrigger value={workspace.toLowerCase()}>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>{workspace.charAt(0)}</AvatarFallback>
            </Avatar>
            {workspace}
          </TabsTrigger>
        </Link>
      ))}
    </TabsList>
  </section>
);

export default DashboardHeader;
