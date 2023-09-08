import React, {createContext} from 'react';

const AppContext = createContext({} as any);

export const AppProvider = ({children}: any) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
