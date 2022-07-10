import React, { useState } from 'react';
import './Markers.css'

const Stats = (props) => {
    
   
    var violentcount = []
    var drugcount = []
    var antisocial = []
    var theft = []
    var robbery = []
    var burglary = []
    var weapons = []
    var other = []
    const stats = props.crimes.map((crime) => {
      
        if (crime.category === 'violent-crime') {
            violentcount.push(crime);
           
        }
        if (crime.category === 'anti-social-behaviour') {
           antisocial.push(crime)
        }
        if (crime.category === 'drugs') {
           drugcount.push(crime)
        }
        if (crime.category === 'theft' || crime.category === 'theft-from-the-person' || crime.category === 'bicicyle-theft' || crime.category === 'other-theft') {
            theft.push(crime)
         }
         if (crime.category === 'robbery') {
            robbery.push(crime)
         }
         if (crime.category === 'burglary') {
            burglary.push(crime)
         }
         if (crime.category === 'possession-of-weapons') {
            weapons.push(crime)
        }
         if (crime.category === 'other-crime') {
            drugcount.push(crime)
         }
    

        
    })
    return (
        <div style={{fontSize: '10px'}}>     
            <div >
                <li style={{color: 'red'}}>
                    {violentcount.length} violent crimes.
                </li>
                <li style={{color: 'greenyellow'}}>
                    {drugcount.length} drug crimes.
                </li>
                <li style={{color: 'pink'}}>
                    {antisocial.length} antisocial crimes.
                </li>
                <li style={{color: 'orange'}}>
                    {theft.length} thefts.
                </li>
                <li style={{color: 'magenta'}}>
                    {robbery.length} robberies.
                </li>
                <li style={{color: 'cyan'}}>
                    {burglary.length} burglaries.
                </li>
                <li style={{color: 'yellow'}}>
                    {weapons.length} weapons possession.
                </li>
            </div>              
        </div>
    )




}





export default Stats;