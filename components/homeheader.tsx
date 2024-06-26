"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { components } from "@/lib/data";
export default function HomeHeader() {
  return (
    <>
      <div className="w-full flex items-center justify-between px-4 ">
        <NavigationMenu className="p-2">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    color="white"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 2 14.875 C 0.895 14.875 0 15.77 0 16.875 L 0 28.734375 C 0 29.839375 0.895 30.734375 2 30.734375 L 5.1660156 30.734375 C 6.2710156 30.734375 7.1660156 29.839375 7.1660156 28.734375 L 7.1660156 28.279297 C 7.4160156 28.699297 7.7192656 29.093172 8.0722656 29.451172 L 8.109375 29.488281 C 8.124375 29.504281 8.1394375 29.520297 8.1484375 29.529297 L 8.1953125 29.578125 C 9.3793125 30.714125 10.945516 31.339844 12.603516 31.339844 C 14.138516 31.339844 15.521937 30.879312 16.585938 30.070312 C 17.579937 30.872312 18.795828 31.339844 20.048828 31.339844 C 20.708535 31.339844 21.283054 31.228027 21.816406 31 L 30.486328 31 L 36.179688 31 L 36.222656 31 L 40.431641 31 C 40.571641 31 40.705781 30.942797 40.800781 30.841797 L 42.152344 29.394531 C 42.350344 29.182531 42.691625 29.182531 42.890625 29.394531 L 44.242188 30.841797 C 44.336188 30.942797 44.471328 31 44.611328 31 L 48.863281 31 C 49.298281 31 49.525422 30.493688 49.232422 30.179688 L 45.634766 26.330078 C 45.459766 26.143078 45.459766 25.856922 45.634766 25.669922 L 49.232422 21.820312 C 49.526422 21.505313 49.299234 21 48.865234 21 L 44.611328 21 C 44.471328 21 44.337187 21.057203 44.242188 21.158203 L 42.890625 22.605469 C 42.692625 22.817469 42.351344 22.817469 42.152344 22.605469 L 40.800781 21.158203 C 40.705781 21.057203 40.571641 21 40.431641 21 L 36.179688 21 C 36.150349 21 36.130866 21.019048 36.103516 21.023438 C 36.068936 21.016287 36.030944 21.00034 36 21 L 30.486328 21 L 30.486328 18.556641 L 36.222656 18.556641 C 36.499656 18.556641 36.722656 18.336406 36.722656 18.066406 L 36.722656 15.490234 C 36.722656 15.220234 36.498656 15 36.222656 15 L 30.486328 15 L 25.894531 15 C 25.743855 14.963756 25.589571 14.939453 25.427734 14.939453 L 22.261719 14.939453 C 21.156719 14.939453 20.261719 15.834453 20.261719 16.939453 L 20.261719 18.849609 C 20.191719 18.846609 20.119828 18.84375 20.048828 18.84375 C 18.633828 18.84375 17.279281 19.431531 16.238281 20.394531 C 15.238281 19.589531 13.991516 19.148437 12.603516 19.148438 C 12.040516 19.148438 11.490844 19.220422 10.964844 19.357422 C 10.964844 19.339422 10.964844 19.321734 10.964844 19.302734 L 10.964844 16.875 C 10.964844 15.77 10.068844 14.875 8.9648438 14.875 L 2 14.875 z M 2 16.875 L 8.9648438 16.875 L 8.9648438 19.302734 L 5.1660156 19.302734 L 5.1660156 21.451172 L 8.9648438 21.451172 L 8.9648438 23.107422 C 9.7158437 21.928422 11.066516 21.148437 12.603516 21.148438 C 14.469516 21.148438 15.7305 22.291906 16.3125 23.878906 C 16.3295 23.930906 16.336516 23.983156 16.353516 24.035156 C 16.741516 22.197156 18.419828 20.845703 20.048828 20.845703 C 20.884828 20.845703 21.661719 21.209406 22.261719 21.816406 L 22.261719 16.939453 L 25.287109 16.939453 L 25.287109 18.556641 L 25.287109 21.222656 L 25.287109 24.779297 L 25.287109 27.445312 L 25.287109 28.880859 L 22.261719 28.880859 L 22.261719 28.126953 C 21.442719 29.123953 20.884828 29.341797 20.048828 29.341797 C 18.621346 29.341797 17.183733 28.297954 16.568359 26.798828 C 16.128359 28.192828 14.760516 29.341797 12.603516 29.341797 C 11.421516 29.341797 10.358031 28.881719 9.5820312 28.136719 C 9.5570312 28.110719 9.5310469 28.076781 9.4980469 28.050781 C 8.7800469 27.322781 8.3320312 26.333 8.3320312 25.25 C 8.3320312 24.765 8.426125 24.305859 8.578125 23.880859 L 5.1660156 23.880859 L 5.1660156 28.734375 L 2 28.734375 L 2 16.875 z M 12.460938 22.648438 C 11.827938 22.648438 11.278203 23.150906 11.033203 23.878906 L 13.894531 23.878906 C 13.641531 23.150906 13.093938 22.648437 12.460938 22.648438 z M 20.673828 22.664062 C 19.803828 22.664062 19.095703 23.619063 19.095703 24.789062 C 19.095703 25.959062 19.803828 26.912109 20.673828 26.912109 C 21.551828 26.912109 22.261719 25.959062 22.261719 24.789062 C 22.261719 23.619062 21.551828 22.664063 20.673828 22.664062 z M 36.722656 22.796875 L 39.408203 25.669922 C 39.583203 25.856922 39.583203 26.143078 39.408203 26.330078 L 36.722656 29.203125 L 36.722656 27.933594 C 36.722656 27.663594 36.498656 27.443359 36.222656 27.443359 L 30.486328 27.443359 L 30.486328 24.263672 L 36.222656 24.263672 C 36.498656 24.263672 36.722656 24.044437 36.722656 23.773438 L 36.722656 22.796875 z M 11.03125 25.699219 C 11.01425 25.985219 11.150906 27.226563 12.628906 27.226562 C 13.201906 27.226562 13.525109 27.000234 13.787109 26.740234 L 16.544922 26.740234 C 16.415922 26.412234 16.327156 26.062219 16.285156 25.699219 L 11.03125 25.699219 z M 16.546875 26.740234 C 16.553669 26.758676 16.560595 26.778433 16.568359 26.796875 C 16.574359 26.777875 16.580938 26.759234 16.585938 26.740234 L 16.546875 26.740234 z"></path>
                  </svg>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Work Spaces</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <Separator />
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
