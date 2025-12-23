import { createContext } from "react";

 export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const a = "ana";
  const b = "bia";
  const c = "ciri";
  const d = "divi";
  const e = "eva";
  const f = "furry";

  return (
    <>
      <AppContext.Provider value={{ a, b, c, d, e, f }}>
        {children}
      </AppContext.Provider>
    </>
  );
}
