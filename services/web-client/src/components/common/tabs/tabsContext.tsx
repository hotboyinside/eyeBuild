"use client";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { ITabsContext, ITabsProvider } from "./tabs.types";

export const TabsContext = createContext<ITabsContext | null>(null);

export const TabsProvider = ({
  children,
  value,
  onChange,
  ...other
}: ITabsProvider) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const isControlled = value !== undefined;

  const activeIndex = isControlled ? value : internalIndex;
  const setActiveIndex = useCallback(
    (index: number) => {
      if (onChange) onChange(index);
      if (!isControlled) setInternalIndex(index);
    },
    [onChange, isControlled]
  );

  const contextValue = useMemo(
    () => ({
      activeIndex,
      setActiveIndex,
      ...other,
    }),
    [activeIndex, setActiveIndex, other]
  );

  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("useTabs must be used within <TabsProvider>");
  return context;
};
