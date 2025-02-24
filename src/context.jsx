import { createContext } from "react";

const defaultValue = {
    count: 0,
    setCount: () => {}
};

export const CountContext = createContext(defaultValue); // create a context with a default value object