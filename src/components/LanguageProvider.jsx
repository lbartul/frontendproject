import { createContext, useContext, useEffect, useState } from "react"

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [lang, setLang] = useState('en');


    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        if (savedLang) {
            setLang(savedLang);
        };
    }, [])


    return (
        <LanguageContext.Provider value={{lang, setLang}}>
            {children}
        </LanguageContext.Provider>
    );
};


export const useLanguage = () => useContext(LanguageContext);