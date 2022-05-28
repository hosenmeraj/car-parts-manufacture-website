import React from 'react';
import { FaRegFlag, FaCannabis, FaJenkins, FaSmileBeam } from "react-icons/fa";

const Bussiness = () => {
    return (
        <>
            <div className='text-center'>
                <h1 className='text-primary text-5xl font-bold'>Millons Bussiness Turst Us</h1>
                <h3 className=' text-xl font-bold'>Try Understand User Expectation</h3>
            </div>
            <div class="stats w-full  stats-vertical lg:stats-horizontal shadow my-6">
                <div class="stat text-center">
                    <div class="stat-title text-3xl py-6"><span className='flex justify-center items-center'><FaRegFlag /></span></div>
                    <div class="stat-value">72</div>
                    <div class="stat-desc text-2xl py-6">Countries</div>
                </div>

                <div class="stat text-center">
                    <div class="stat-title text-3xl py-6"><span className='flex justify-center items-center'><FaCannabis /></span></div>
                    <div class="stat-value ">500+</div>
                    <div class="stat-desc text-2xl py-6">Complete Project</div>
                </div>

                <div class="stat text-center">
                    <div class="stat-title text-3xl py-6"><span className='flex justify-center items-center'><FaJenkins /></span></div>
                    <div class="stat-value ">200+</div>
                    <div class="stat-desc text-2xl py-6">Happy Clients</div>
                </div>
                <div class="stat text-center">
                    <div class="stat-title text-3xl py-6"><span className='flex justify-center items-center'><FaSmileBeam /></span></div>
                    <div class="stat-value ">300+</div>
                    <div class="stat-desc text-2xl py-6">Feedback</div>
                </div>

            </div>
        </>
    );
};

export default Bussiness;