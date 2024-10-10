import React from 'react'
import './project.css'
import Card from 'react-bootstrap/Card';
import projects from '../../data/projects';

const Project = () => {
    return (
        <>
            <div className="my-project" id='project'>
                <div className="my-project-title">
                    <h1>Projects Done</h1>
                </div>

                <div className="project-cards">
                    <div className="container">
                        <div className="row">
                            {
                                projects.map((cval) => {
                                    return (
                                        <>
                                            <div className="col-md-4 card-project">
                                                <Card style={{ width: '25rem' }} className='card'>
                                                    <Card.Img variant="top" src={cval.project_photo} className='project-card' />
                                                    <Card.Body>
                                                        <Card.Title className='project-title'>{cval.project_name}</Card.Title>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="show-more-button">
                    <li><a href="https://github.com/SavairamK">Show More</a></li>
                </div>

            </div>
        </>
    )
}

export default Project
