import React from 'react'
import Carousel, { autoplayPlugin, slidesToScrollPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { Slides } from './Slides';
import '@brainhubeu/react-carousel/lib/style.css';
import './Slider.css'

export const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>My Projects</h2>
            </div>

            <Carousel
                plugins={[
                    'centered',
                    'infinite',
                    'arrows',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 1,
                        },
                    },
                    {
                        resolve: slidesToScrollPlugin,
                        options: {
                            numberOfSlides: 1,
                        },
                    },
                    {
                        resolve: autoplayPlugin,
                        options: {
                            interval: 3000,
                        },
                    },
                ]}
                animationSpeed={1000}
                slides={Slides}
                breakpoints={{
                    960: {
                        plugins: [
                            'infinite',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 1,
                                },
                            },
                            {
                                resolve: slidesToScrollPlugin,
                                options: {
                                    numberOfSlides: 1,
                                },
                            },
                            {
                                resolve: autoplayPlugin,
                                options: {
                                    interval: 3000,
                                },
                            },
                        ]
                    }
                }}
            />
        </div>
    )
}
