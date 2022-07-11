import React from 'react';
import PieChart from './PieChart';
import './Markers.css'

const Stats = (props) => {
    
   
    var violentcount = []
    var drugcount = []
    var antisocial = []
    var theft = []
    var robbery = []
    var burglary = []
    var weapons = []
    var shoplifting = []
    var publicorder = []
    var vehicle = []
    var damage = []
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
        if (crime.category === 'theft' || crime.category === 'theft-from-the-person' || crime.category === 'bicycle-theft' || crime.category === 'other-theft') {
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
         if (crime.category === 'shoplifting') {
            shoplifting.push(crime)
         }
         if (crime.category === 'public-order') {
            publicorder.push(crime)
         }
         if (crime.category === 'vehicle-crime') {
            vehicle.push(crime)
         }
         if (crime.category === 'criminal-damage-arson') {
            damage.push(crime)
         }
         if (crime.category === 'other-crime') {
            other.push(crime)
         }
   
         return null
    
         

        
    })
    console.log(stats)
    return (
        <div className="statscontainer">     
            {/* <div >
                <li style={{color: 'red'}}>
                    {violentcount.length} violent crimes.
                </li>
                <li style={{color: 'greenyellow'}}>
                    {drugcount.length} drug crimes.
                </li>
                <li style={{color: 'pink'}}>
                    {antisocial.length} antisocial behaviours.
                </li>
                <li style={{color: 'orange'}}>
                    {theft.length} thefts.
                </li>
                <li style={{color: 'brown'}}>
                    {shoplifting.length} shopliftings.
                </li>
                <li style={{color: 'magenta'}}>
                    {robbery.length} robberies.
                </li>
                <li style={{color: 'cyan'}}>
                    {burglary.length} burglaries.
                </li>
                <li style={{color: 'yellow'}}>
                    {weapons.length} weapons possessions.
                </li>
                <li style={{color: 'grey'}}>
                    {publicorder.length} public orders.
                </li>
                <li style={{color: 'purple'}}>
                    {publicorder.length} vehicle crimes.
                </li>
                <li style={{color: 'violet'}}>
                    {damage.length} criminal damage/arson.
                </li>
                <li style={{color: 'white'}}>
                    {other.length} others.
                </li>
                
                
                
            </div>      */}
            <PieChart 
                 violentcount = {violentcount.length}
                 drugcount = {drugcount.length}
                 antisocial = {antisocial.length}
                 theft = {theft.length}
                 robbery = {robbery.length}
                 burglary = {burglary.length}
                 weapons = {weapons.length}
                 shoplifting = {shoplifting.length}
                 publicorder = {publicorder.length}
                 vehicle = {vehicle.length}
                 damage = {damage.length}
                 other = {other.length}
                
                
                />
                    
        </div>
    )




}





export default Stats;