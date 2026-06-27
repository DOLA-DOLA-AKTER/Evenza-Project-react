import React from 'react'

// assets
import blogImg from '../assets/blog-img.png'
import blogImg2 from '../assets/blog-img2.png'
import blogImg3 from '../assets/blog-img3.png'
import pricingBenefit from '../assets/pricing-benefit.png'

// Components
import Peragraph from '../Container/Peragraph'
import Heading3 from '../Container/Heading3'
import Container from '../Container/Container'
import BlogCard from './BlogCard'
import SectionHeading from '../Container/SectionHeading'


const Blog = () => {
    return (
        <div>
            <Container>
                <div className='md:w-184 w-full block mx-auto text-center'>
                    <SectionHeading
                        secheading='flex flex-col items-center'
                        peragraph="Latest Blog"
                        heading='Explore our latest insights stories and updates'
                    />
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 items-center pt-20'>
                    <div>
                        <BlogCard
                            img={blogImg}
                            icon={pricingBenefit}
                            peragraph='Esther Howard'
                            title="Mastering Public Speaking: Expert Tips for Confident
                            Presentations"
                            decs="Improve your communication skills with proven techniques used by world-class
                            speakers to captivate and inspire audiences."
                        />
                    </div>
                    <div className='flex flex-col  gap-7.5'>
                        <BlogCard
                            className='flex flex-col md:flex-row md:items-center md:justify-center'
                            imgclass='md:w-165 w-full h-80'
                            img={blogImg3}
                            icon={pricingBenefit}
                            peragraph='Esther Howard'
                            title="Simple Self-Defense Skills Everyone Should Learn for Safety"
                        />
                        <BlogCard
                            className='flex flex-col md:flex-row md:items-center md:justify-center'
                            imgclass='md:w-165 w-full h-80'
                            img={blogImg2}
                            icon={pricingBenefit}
                            peragraph='Esther Howard'
                            title="The Power of Networking: Building Connections That Last"
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Blog
