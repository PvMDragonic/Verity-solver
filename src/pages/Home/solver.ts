import Prism from "../../assets/Prism";
import Cylinder from "../../assets/Cylinder";
import Cone from "../../assets/Cone";

const requiredCompound: { [key: string]: string } = 
{
    C: 'ST', // A statue with a circle should have a prism (ST);
    S: 'TC', // A statue with a square should have a cone (TC);
    T: 'SC'  // A statue with a triangle should have a cylinder (SC).
};

const statuePositions: { [key: number]: string } = 
{
    0: 'left',
    1: 'middle',
    2: 'right'
};

const simpleSymbolsNames: { [key: string]: string } = 
{
    C: '○',
    S: '□',
    T: '△'
}

const compoundIcon: { [key: string]: React.FC } =
{
    ST: Prism,
    TS: Prism,
    SC: Cylinder,
    CS: Cylinder,
    TC: Cone,
    CT: Cone
};

interface IPuzzleSolver
{
    finalSymbols: React.FC[] | undefined;
    instructions: string[][];
}

export function PuzzleSolver(inside: string[], outside: string[]): IPuzzleSolver
{
    // The params are React useStates that can't be directly changed.
    const simpleSymbols = [...inside];
    const compoundSymbols = [...outside];
    const swaps: string[][] = [];
    
    for (let i = 0; i < simpleSymbols.length; i++)
    {
        const required = requiredCompound[simpleSymbols[i]];

        if (compoundSymbols[i] === required)
            continue;

        // The inside already has one of the symbols that make the compound from the outside.
        // The '|| compoundSymbols[i][0]' is for when the compound has two of the same characters, like "CC" (sphere).
        const unneededSymbol = compoundSymbols[i].split('').find(char => char === simpleSymbols[i]) || compoundSymbols[i][0];

        // If the outside is "SC" (cylinder) and it needs "ST" (prism), then the needed symbol is "T".
        const neededSymbol = required.replace(compoundSymbols[i].split('').find(char => required.includes(char)) || compoundSymbols[i][0], '');
        
        // Needs to find a statue with a symbol that both the current statue needs and isn't needed by the found statue.
        for (let j = 0; j < compoundSymbols.length; j++)
        {
            // It can't swap with itself, right?
            if (i === j) continue;

            // This ignores any completed statue.
            if (compoundSymbols[j] === requiredCompound[simpleSymbols[j]])
                continue;

            // Find the one that both inside and outside already have, just like for 'unneededSymbol'.
            const temp = compoundSymbols[j].split('').find(char => char === simpleSymbols[j]) || compoundSymbols[j][0];

            if (temp === neededSymbol)
            {
                swaps.push([simpleSymbolsNames[unneededSymbol], statuePositions[i]]);
                swaps.push([simpleSymbolsNames[temp], statuePositions[j]]);

                // Needs to swap for the next statue.
                compoundSymbols[i] = compoundSymbols[i].replace(unneededSymbol, neededSymbol);
                compoundSymbols[j] = compoundSymbols[j].replace(neededSymbol, unneededSymbol);
            }
        }
    }

    // Needs to sort first, as the same symbol (like Cylinder) can come as both "CS" or "SC".
    const sortedCompound = compoundSymbols.map(str => str.split('').sort().join(''));
    const noDupes = new Set(sortedCompound).size === compoundSymbols.length;
    const finalSymbols = compoundSymbols.map(symbol => compoundIcon[symbol]);
    const noUndefineds = finalSymbols.every(symbol => symbol !== undefined);

    if (noDupes && noUndefineds)
        return {
            finalSymbols: finalSymbols, 
            instructions: swaps
        };

    return {
        finalSymbols: undefined,
        instructions: swaps
    };
}