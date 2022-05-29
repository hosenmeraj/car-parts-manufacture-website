import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/x6ZqwZ1/car-parts-removebg-preview.png" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold"> Current Trends and Future</h1>
                    <p class="py-6">Multi drive Ltd is the best automobile manufacturer company in Bangladesh. We are the best automobile manufacturing service provider from Bangladesh. We also an Automobile Assembler & Manufacturers product......</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;