import { createContext, useState } from "react";
import SERVICES_DATA from '../services-data.json';

export const ServicesContext = createContext({
    services: [],
});

export const ServicesProvider = ({children}) => {
    // eslint-disable-next-line no-unused-vars
    const [ services, setServices ] = useState(SERVICES_DATA);
    const value = { services };

    return (
        <ServicesContext.Provider value={value}>{ children }</ServicesContext.Provider>
    );
}