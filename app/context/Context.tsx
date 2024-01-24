'use client'

import { createContext, ReactNode, useContext, useState } from 'react';

interface ContextProps {
  data: string;
  setData: (value: string) => void;
}

const MyContext = createContext<ContextProps | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<string>('Default Data');

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
