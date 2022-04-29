import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { colors } from '../../style';
import Card from '../UI/Card';
import MediumHeading from '../UI/MediumHeading';
import SmallHeading from '../UI/SmallHeading';
import me from '../../assets/images/me-left.png';
import './style.css';


const Expertise = (props) => {
    const percentage = 70;
  return (
        <div className='container'>
            <div data-aos="fade-right" className='rightImgMeContainer'>
                <img src={me} alt="" />
            </div>
            <div style={{padding: '50px 0'}}>
                <SmallHeading text="Expertise" />
                <MediumHeading text="Special Skills" />
            </div>
            <Card style={{margin: '100px auto',padding: '30px', width: '320px', position: 'relative', zIndex: '1'}} data-aos="flip-up">
               <div className='flexRow align-center'>
               <div style={{width: '70px', height: '70px'}} >
                <CircularProgressbar 
                value={percentage} 
                text={`${percentage}%`} 
                styles={buildStyles({
                    textColor: colors.grey,
                    pathColor: colors.primaryColor,
                })}
            
                />
                </div>
                <h2 className='textColor mlr-10'>Development</h2>
               </div>
               <p className='greyColor mtb-10 font-12'>JavaScript is one of the greatest programming language.</p>
            </Card>
        </div>
    );
};

export default Expertise;
