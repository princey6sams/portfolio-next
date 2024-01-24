"use client"
 
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Stack, Typography } from "@mui/material"
import ThemeToggle from "./ThemeToggle"
import { replaceBase } from "@/utils/utils"
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Photography",
    href: replaceBase("${Base}/photography"),
    description:
      "Section of the website where I showcase my photography skills.",
  },
  {
    title: "Programming",
    href: replaceBase("${Base}/programming"),
    description:
      "Section of the website where I showcase my programming skills.",
  },
]

const NavBar = () => { //fix font for name
    return (
      <Stack direction="row" justifyContent="space-between" pt={4} px={10}>
          <Link href="/" passHref>
            <Typography variant="h6" fontWeight="bold" fontSize={25}>Prince Authoy Singha</Typography>
          </Link>
          <Stack direction="row-reverse" spacing={2}>
              <ThemeToggle/>
              <NavigationMenu>
                  <NavigationMenuList>
                      <NavigationMenuItem>
                          <NavigationMenuTrigger>Work</NavigationMenuTrigger>
                          <NavigationMenuContent>
                          <ul className="grid w-[300px] gap-3 p-4 md:w-[350px] md:grid-cols-1 lg:w-[400px] ">
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
                          <Link href="/about" legacyBehavior passHref>
                              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                              About
                              </NavigationMenuLink>
                          </Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                          <Link href="/contact" legacyBehavior passHref>
                              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                              Contact Me
                              </NavigationMenuLink>
                          </Link>
                      </NavigationMenuItem>
                  </NavigationMenuList>
              </NavigationMenu>
          </Stack>
        </Stack>

    )
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
  )
})
ListItem.displayName = "ListItem"

export default NavBar