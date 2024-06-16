import { useState, createContext, useContext } from 'react';

export const DashboardContext = createContext<{
  isAdmin: boolean,
  setIsAdmin: Function,
  apiData: any,
  setApiData: Function,
  disabledRows: string[],
  setDisabledRows: Function,
}>(
  {
    isAdmin: false,
    setIsAdmin: () => undefined,
    apiData: [],
    setApiData: () => undefined,
    disabledRows: [],
    setDisabledRows: () => undefined,
  },
);

const useDashboardContext = () => useContext(DashboardContext);

function DashboardProvider({ children }: { children: any }) {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [apiData, setApiData] = useState<any[]>([]);
  const [disabledRows, setDisabledRows] = useState<string[]>([]);

  const value = {
    isAdmin,
    setIsAdmin,
    apiData,
    setApiData,
    disabledRows,
    setDisabledRows,
  }

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export {
  DashboardProvider,
  useDashboardContext,
};
