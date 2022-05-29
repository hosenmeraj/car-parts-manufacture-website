import React from 'react';
import Bussiness from '../../Bussiness/Bussiness';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Tools></Tools>
            <Bussiness></Bussiness>


        </div>
    );
};

export default Home;