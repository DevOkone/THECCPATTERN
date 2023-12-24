"use client";
import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext({});
export default function Tabs({ children, defaultValue }) {
  const [openName, setOpenName] = useState(defaultValue);
  const open = setOpenName;
  return (
    <TabsContext.Provider value={{ openName, open }}>
      <div className="flex flex-col">{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children }) {
  return (
    <div className="flex justify-center">
      <div className=" flex items-center gap-1
       bg-gray-300 p-1 rounded">
        {children}
      </div>
    </div>
  );
}

export function TabsTrigger({ name, value, count }) {
  const { open, openName } = useContext(TabsContext);
  return (
    <div
      onClick={() => open(value)}
      className={`flex cursor-pointer py-1 px-5 ${
        openName === value && "bg-white shadow-md rounded"
      } `}
    >
      <h3 className="text-base capitalize">{name}</h3>
      {count !== null && <span>({count})</span>}
    </div>
  );
}

export function TabsContent({ children, value }) {
  const { open, openName } = useContext(TabsContext);
  if (value !== openName) return null;
  return (
    <div className="flex justify-center mt-4">
      <div className="flex justify-center border border-gray-300 p-3 rounded-lg bg-white shadow-md">
        {children}
      </div>
    </div>
  );
}

// TabsContext.TabsList = TabsList;
// TabsContext.TabsTrigger = TabsTrigger;
// TabsContext.TabsContent = TabsContent;
