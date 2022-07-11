import React, {useState} from 'react';

import { Pie } from 'react-chartjs-2';
import './Markers.css'



import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  } from 'chart.js';
  
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );
  export const PieChart = (props) => {


    

    const data = {
        labels: [`violent crimes`,
                `drugs`,
                `antisocial behavior`,
                 'theft',
                  'robbery',
                   'burglary',
                    'weapons',
                     'shoplifting',
                      'public-order',
                       'vehicle crime',
                        'criminal damage/arson',
                            'other'],
        datasets: [{
            fill: true,
            label: "crime category",
            data: [
                props.violentcount,
                props.drugcount,
                props.antisocial,
                props.theft,
                props.robbery,
                props.burglary,
                props.weapons,
                props.shoplifting,
                props.publicorder,
                props.vehicle,
                props.damage,
                props.other,
            ],
            backgroundColor: [ 
                'red',
                'greenyellow',
                'purple',
                'orange',
                'violet',
                'cyan',
                'yellow',
                'magenta',
                'turquoise',
                'pink',
                'brown',
                'white'






            ],
        },

        ],
    };
    const options = {
        cutout: '66%%',
        rotation: 100,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        
        plugins :{
            legend: {
                display: false,
                position: 'bottom',
                labels: {
                    
                    boxWidth: 10,
                    boxHeight: 10,
                    
                    font: {
                        size: 9,
                        
                    },
                    
                
                    color: 'white'
                }
            },


                

            
        }
    };

    return (
        <>
        <div className="piebox">
            
            <Pie className="pie" data={data} options={options}></Pie>
           
        </div> 
      
        </>


    );
    
  }

  export default PieChart