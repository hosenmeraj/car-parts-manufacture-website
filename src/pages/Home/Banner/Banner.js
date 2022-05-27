import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(https://i.ibb.co/27ZkNBy/90-902330-auto-parts-brisbane-car-spare-parts-png.png)` }}>
            <div class="hero-overlay bg-opacity-80"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Find Parts For your Vehicle</h1>
                    <p class="mb-5">Over Hundred Of brand and ten thousands of parts.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;