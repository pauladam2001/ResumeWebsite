import React, { useState, useContext, useEffect } from 'react';

const url = 'https://projects-data-api.netlify.app/data.json'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [alert, setAlert] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    // const [projects, setProjects] = useState([]);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const showAlert = () => {
        setAlert(true);
    }

    const hideAlert = () => {
        setAlert(false);
    }

    const openInfo = () => {
        setShowInfo(true);
    }

    const hideInfo = () => {
        setShowInfo(false);
    }

    // const fetchProjects = async () => {
    //     try {
    //         const response = await fetch(url, {
    //             mode: 'no-cors'                                  // try when it is up and running
    //         });
    //         const data = await response.json();
    //         console.log(data);
    //         setProjects(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     fetchProjects();
    // }, [])

    return <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar, alert, showAlert, hideAlert, showInfo, openInfo, hideInfo }}>{children}</AppContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };