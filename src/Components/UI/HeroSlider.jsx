import React from 'react'
import Slider from 'react-slick'
import {Container} from 'reactstrap'
import {Link} from 'react-router-dom'

const HeroSlider = () => {
  return <Slider className='hero__slider'>
    <div className='slider__item slider__item-01 mt0'>
        <Container>
            <div className="slider__content">
                <h4 className='text-light mb3'>For rent Rs 2800.00 Per Day</h4>
                <h1>Reserve Now and Get 50% Off</h1> 

                <button className='btn reserve__btn'>
                    <Link to='/cars'>Reserve Now</Link>
                </button>
            </div>
        </Container>
    </div>

    <div className='slider__item slider__item-01 mt0'>
        <Container>
            <div className="slider__content">
                <h4 className='text-light mb3'>For rent Rs 2800.00 Per Day</h4>
                <h1>Reserve Now and Get 50% Off</h1> 
                
                <button className='btn reserve__btn'>
                    <Link to='/cars'>Reserve Now</Link>
                </button>
            </div>
        </Container>
    </div>

    <div className='slider__item slider__item-01 mt0'>
        <Container>
            <div className="slider__content">
                <h4 className='text-light mb3'>For rent Rs 2800.00 Per Day</h4>
                <h1>Reserve Now and Get 50% Off</h1> 
                
                <button className='btn reserve__btn'>
                    <Link to='/cars'>Reserve Now</Link>
                </button>
            </div>
        </Container>
    </div>
    
  </Slider>
    
  
}

export default HeroSlider
