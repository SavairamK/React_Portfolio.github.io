import React from 'react'
import './myskills.css'
import Card from 'react-bootstrap/Card';
import skillset from '../../data/skills';

const MySkills = () => {
    return (
        <>
            <div className="my-skill" id='skills'>
                <div className="skill-title">
                    <h1>My Skillset</h1>
                </div>

                <div className="skill-cards">
                    <div className="container">
                        <div className="row">
                            {
                                skillset.map((cval) => {
                                    return (
                                        <>
                                            <div className="col-md-4">
                                                <Card style={{ width: '18rem' }} className='card'>
                                                    <Card.Img variant="top" src={cval.skill_photo} className='skills-card' />
                                                </Card>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MySkills
