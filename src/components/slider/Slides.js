import React from 'react'
import Slides1 from '../../media/Slides1.jpg'
import Slides2 from '../../media/Slides2.jpg'
import Slides3 from '../../media/Slides3.jpg'
import './Slider.css'

const slidesInfo = [
    {
        src: Slides1,
        alt: 'Project 1',
        desc: 'Project 1'
    },
    {
        src: Slides2,
        alt: 'Project 2',
        desc: 'Project 2'
    },
    {
        src: Slides3,
        alt: 'Project 3',
        desc: 'Project 3'
    }
]

export const Slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

