import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { RiArrowRightSLine, RiArrowDownSFill } from 'react-icons/ri';
// import { GoPrimitiveDot } from 'react-icons/go';
import Scroll from '../../components/scroll/scroll.component';
import CardList from '../../components/cardlist/cardlist.component';
import projects from '../../data';
import Zoom from 'react-reveal/Zoom';
// import RubberBand from 'react-reveal/RubberBand';
// import Fade from 'react-reveal/Fade';
import './projectspage.styles.css';

const ProjectsPage = () => {
    const { isSidebarOpen, closeSidebar, showInfo, openInfo, hideInfo } = useGlobalContext();
    let uniqueTopics = [...new Set(projects.map((project) => {
        return project.topic;
    }))]

    useEffect(() => {
        if (isSidebarOpen) {
            closeSidebar();
        }
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
                    {/* <Fade left>
                        <AccordionItem key={1}>
                            <AccordionItemHeading >
                                <AccordionItemButton className='accordion-heading' onClick={showInfo ? hideInfo : openInfo}>
                                    {showInfo ? <RiArrowDownSFill /> : <RiArrowRightSLine />}
                                    AA
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className=''>
                                <Scroll>
                                    <CardList projects={projects} />
                                </Scroll>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Fade>
                    <Fade right>
                        <AccordionItem key={1}>
                            <AccordionItemHeading >
                                <AccordionItemButton className='accordion-heading' onClick={showInfo ? hideInfo : openInfo}>
                                    {showInfo ? <RiArrowDownSFill /> : <RiArrowRightSLine />}
                                    AA
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className=''>
                                <Scroll>
                                    <CardList projects={projects} />
                                </Scroll>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Fade>
                    <Fade left>
                        <AccordionItem key={1}>
                            <AccordionItemHeading >
                                <AccordionItemButton className='accordion-heading' onClick={showInfo ? hideInfo : openInfo}>
                                    {showInfo ? <RiArrowDownSFill /> : <RiArrowRightSLine />}
                                    AA
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className=''>
                                <Scroll>
                                    <CardList projects={projects} />
                                </Scroll>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Fade>
                    <Fade right>
                        <AccordionItem key={1}>
                            <AccordionItemHeading >
                                <AccordionItemButton className='accordion-heading' onClick={showInfo ? hideInfo : openInfo}>
                                    {showInfo ? <RiArrowDownSFill /> : <RiArrowRightSLine />}
                                    AA
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className=''>
                                <Scroll>
                                    <CardList projects={projects} />
                                </Scroll>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Fade>*/}
                </Accordion>
            </div >
        </div >
    );
}

export default ProjectsPage;