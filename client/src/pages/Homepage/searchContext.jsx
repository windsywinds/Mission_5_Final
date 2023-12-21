import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
};

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [globalAddress, setGlobalAddress] = useState("");
    const [globalKeywords, setGlobalKeywords] = useState([]);
    const [globalFilters, setGlobalFilters] = useState({
        bathroom: ["Any", "Any"],
        bedroom: ["Any", "Any"],
        pets: "Any",
        rent: ["Any", "Any"],
        suburb: "Any",
    });

    const updateSearch = (newSearch) => {
        setSearch(newSearch);
    };

    return (
        <SearchContext.Provider value={{ search, updateSearch, globalAddress, setGlobalAddress, globalKeywords, setGlobalKeywords, globalFilters, setGlobalFilters }}>
            {children}
        </SearchContext.Provider>
    );
};

export const UserSearchTerms = () => {
    return useContext(SearchContext);
};
