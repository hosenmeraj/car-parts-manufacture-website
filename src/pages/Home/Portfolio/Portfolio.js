import React from 'react';
import image from "../../../assets/images/Meraj.jpg"

const Portfolio = () => {
    return (
        <div className='px-12 py-10 flex justify-center items-center'>
            <img className='w-44' src={image} alt="" />
            <div className='px-7'>
                <p>This is Meraj Hosen. I am completed my graduation in CSE from ZH Sikder University Science and Technology.I am from Shariatpur.I work in a private bank.o work in association grounps who offer me the oppurtunity of career advancement and profetional growth inthe feild of software development</p>

                <p>
                    <h1 className='text-2xl font-bold'>EDUCATION:</h1> <br />

                    Bachalor of Computer Science and Engineering (CSE)
                    Institute		: Z. H. Sikder University of Science & Technology
                    Department		: Computer Science and Engineering
                    Result			: CGPA: 3.139 (on scale of 4.0)
                    Session 		: 2012-2016 (CSE)

                    Higher Secondary School Certificate (H.S.C)
                    Institution		: M. A. Reza Degree College
                    Result			: GPA-3.90 (on scale of 5)
                    Passing year		: 2011
                    Board			: Dhaka
                    Group			: Science

                    Secondary School Certificate (S.S.C)
                    Institution		: Rambhadrapur R. M. High School
                    Result			: GPA-3.50(on scale of 5)
                    Passing year		: 2009
                    Board			: Dhaka
                    Group			: Science

                </p>
                <p>
                    <h2 className='font-bold text-2xl'>TECHNICAL SKILS:</h2>
                    Web Technologies: HTML, CSS, Java Script,
                    Web Technologies: HTML, CSS, Java Script,
                    IDE:Net Beans, Eclipse
                    Operating System: Ubuntu, Windows
                    Web Services: Apache
                    Office Automation: Microsoft Office Suit 2007/2010/2013
                </p>
                <p>
                    <h2 className='font-bold text-2xl'> PERSONAL INTERESTS:</h2>
                    I really like going to theatre, I enjoy watching, both, classic and modern movies. I read a  lot, my reading interests are mostly about fiction, math, literature and science. I support free and open source software. I prefer to work in team. Traveling and visiting interesting places is my favorite form of holiday. I also enjoy walking in the nature.

                </p>
                <h3 className='font-bold text-2xl py-4'>Last Assignment</h3>
                <a href="">https://amar-cycle-firebase-auth.web.app/</a> <br />
                <a href="">https://dantist-mrs-sabrina.web.app/</a>
            </div>

        </div>
    );
};

export default Portfolio;