import React from 'react';
import Card from '../card/card.component';

const CardList = ({ projects, topic }) => {
    let filteredProjects = projects.filter(project => project.topic === topic)

    return (
        <div>
            {filteredProjects.map((project, index) => {
                const { title, image, github } = project;
                return (
                    <Card key={index} title={title} image={image} github={github} />
                );
            })}
        </div>
    );
}

export default CardList;