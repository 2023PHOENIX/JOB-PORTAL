import React, { createContext, useState } from "react";

export const searchJobContext = createContext();
function SearchJobProvider({ children }) {
    const [jobListKey, setJobListKey] = useState(null);
    

  return (
    <searchJobContext.Provider value={{ jobListKey, setJobListKey }}>
      {children}
    </searchJobContext.Provider>
  );
}

export default SearchJobProvider;
