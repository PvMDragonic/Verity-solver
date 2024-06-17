import React, { createContext, useEffect, useState } from 'react';

interface ContextType 
{
    colorMode: string;
    setColorMode: React.Dispatch<React.SetStateAction<string>>;
}

const ColorModeContext = createContext<ContextType>( 
    { colorMode: '', setColorMode: () => {} }
);

const localStorageKey = 'verityColorMode';

function fetchDefaultMode()
{
    const storedValue = localStorage.getItem(localStorageKey);
    if (storedValue !== null)
        return storedValue;

    return window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dm' 
        : 'lm';
}

function ColorModeProvider({ children }: { children: React.ReactNode }) 
{
    const [colorMode, setColorMode] = useState<string>(fetchDefaultMode());

    useEffect(() => 
        localStorage.setItem(localStorageKey, colorMode), 
        [colorMode]
    );

    return (
        <ColorModeContext.Provider value = {{ colorMode, setColorMode }}>
            {children}
        </ColorModeContext.Provider>
    );
}

export { ColorModeProvider };
export default ColorModeContext;