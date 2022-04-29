import React from 'react';
import { colors } from '../../style';
import Card from '../UI/Card';
import MediumHeading from '../UI/MediumHeading';
import Skill from '../UI/Skill';
import SmallHeading from '../UI/SmallHeading';


const Specializing = (props) => {
    const skills = [
        {
           skillName: 'HTML/CSS',
           desc: 'Hands on experience in HTML/CSS',
           value: 70,
           textColor: colors.primaryColor,
           pathColor: '#FF884B'
        },
        {
           skillName: 'JavaScript',
           desc: 'Hands on experience in JavaScript',
           value: 65,
           textColor: colors.primaryColor,
           pathColor: '#F1D00A'
        },
        {
            skillName: 'PHP',
            desc: 'Hands on experience in PHP',
            value: 60,
            textColor: colors.primaryColor,
            pathColor: '#7A0BC0'
         },
        {
           skillName: 'Bootstrap',
           desc: 'Hands on experience in Bootstrap',
           value: 60,
           textColor: colors.primaryColor,
           pathColor: '#09009B'
        },
        {
           skillName: 'MySQL',
           desc: 'Hands on experience in MySQL',
           value: 70,
           textColor: colors.primaryColor,
           pathColor: '#FFE162'
        },
        {
           skillName: 'React JS',
           desc: 'Hands on experience in React JS',
           value: 50,
           textColor: colors.primaryColor,
           pathColor: '#11468F'
        },
    ]
  return (
    <div className='container'>
        <Card style={{padding: "50px"}}>
        <SmallHeading text="What I Do" />
        <MediumHeading text="Specializing In" /> 
        <div data-aos="fade-up" className='flexRow wrap justify-sb' style={{padding: "30px" }}>
            {
                skills.map((skill, index) => (
                <Skill
                key= {index}
                skillName={skill.skillName}
                desc={skill.desc}
                value= {skill.value}
                textColor= {colors.primaryColor}
                pathColor= {skill.pathColor}
            />))
            }
            
        </div>
        </Card>
        
    </div>
    );
};

export default Specializing;
