import React from 'react';
import './Skill.css'

const Skill = () => {
    return (
        <div className='body-skill'>
            <div className="container-1">
                <h2>Skills </h2>
                <div className="skills">
                    <span className='name'>Html</span>
                    <span className='percent'>
                        <span style={{width:'95%'}} className='progress'></span>
                    </span>
                    <span className='value'>95%</span>
                </div>
                <div className="skills">
                    <span className='name'>CSS</span>
                    <span className='percent'>
                        <span style={{width:'90%'}} className='progress'></span>
                    </span>
                    <span className='value'>90%</span>
                </div>
                <div className="skills">
                    <span className='name'>Javascript</span>
                    <span className='percent'>
                        <span style={{width:'72%'}} className='progress'></span>
                    </span>
                    <span className='value'>72%</span>
                </div>
                <div className="skills">
                    <span className='name'>React</span>
                    <span className='percent'>
                        <span style={{width:'88%'}} className='progress'></span>
                    </span>
                    <span className='value'>88%</span>
                </div>
                <div className="skills">
                    <span className='name'>Firebase</span>
                    <span className='percent'>
                        <span style={{width:'90%'}} className='progress'></span>
                    </span>
                    <span className='value'>90%</span>
                </div>
                <div className="skills">
                    <span className='name'>Nodejs</span>
                    <span className='percent'>
                        <span style={{width:'60%'}} className='progress'></span>
                    </span>
                    <span className='value'>60%</span>
                </div>
            </div>
        </div>
    );
};

export default Skill;