import React, { useState } from "react";
import Link from "next/link";
import MenuItemsDropdown from "./MenuItemsDropdown";
import MenuItemsInline from "./MenuItemsInline";
import DarkModeButton from "./DarkModeButton";
import Content from "../Content";

const MenuBar = () => {
  return (
    <Content As="nav" className="text-md my-size-sm">
      <nav className="flex w-full flex-row prose:flex-col justify-between gap-size-2xs pb-size-2xs border-b-[1px] border-mine-shaft-800 dark:border-mine-shaft-100">
        <h1 className="text-size-1 font-bold tracking-tight">
          <Link href="/">Kyle Butts</Link>
        </h1>

        <div className="flex items-end justify-between">
          <MenuItemsInline />
          <div className="flex items-center prose:items-end gap-size-3xs">
            <DarkModeButton />
            <MenuItemsDropdown />
          </div>
        </div>
      </nav>
    </Content>
  );
};

export default MenuBar;
