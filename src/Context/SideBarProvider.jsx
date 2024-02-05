import React, { createContext, useState } from "react";

export const SideBarContext = createContext(null);
const SideBarProvider = ({ children }) => {
  const [isSidebar, setSideBar] = useState(false);
  return (
    <SideBarContext.Provider value={{ isSidebar, setSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
