import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { RiArrowRightSLine, RiArrowDownSFill } from 'react-icons/ri';
import Scroll from '../../components/scroll/scroll.component';
import CardList from '../../components/cardlist/cardlist.component';
import projects from '../../data';
import Zoom from 'react-reveal/Zoom';
import './projectspage.styles.css';

const ProjectsPage = () => {
    const { isSidebarOpen, closeSidebar, showInfo, openInfo, hideInfo } = useGlobalContext();

    // const [projectsAPI, setProjectsAPI] = useState([]);
    // const fetchProjects = async () => {
    //     try {
    //         const response = await fetch('https://projects-data-api.netlify.app/data.json');
    //         const projectss = await response.json();
    //         setProjectsAPI(projectss);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     fetchProjects();
    // })

    let uniqueTopics = [...new Set(projects.map((project) => {
        return project.topic;
    }))]

    useEffect(() => {
        if (isSidebarOpen) {
            closeSidebar();
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className={`${isSidebarOpen ? 'main-container sidebar-open-projects' : ' main-container sidebar-closed'}`}>
            <div className='container'>
                <Accordion allowZeroExpanded>
                    {uniqueTopics.map((topic, index) => {
                        return (
                            <div className=''>
                                <Zoom>
                                    <AccordionItem key={index}>
                                        <AccordionItemHeading >
                                            <AccordionItemButton className='accordion-heading' onClick={showInfo ? hideInfo : openInfo}>
                                                {showInfo ? <RiArrowDownSFill /> : <RiArrowRightSLine />}
                                                {topic}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className=''>
                                            <Scroll>
                                                <CardList projects={projects} topic={topic} />
                                            </Scroll>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Zoom>
                            </div>
                        );
                    })}
                </Accordion>
            </div >
        </div >
    );
}

export default ProjectsPage;