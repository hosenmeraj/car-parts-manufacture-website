import React from 'react';

const Blogs = () => {
    return (
        <div className='py-10 px-12'>
            <div>
                <h1 className='text-xl text-primary font-bold'>How will you improve the performance of a React Application?</h1>
                <p >
                    - Keeping component state local where necessary. <br />
                    -Memoizing React components to prevent unnecessary re-renders.<br />
                    -Code-splitting in React using dynamic import()<br />
                    -Windowing or list virtualization in React.<br />
                    -Lazy loading images in React.
                </p>
            </div>
            <div>
                <h1 className='text-xl text-primary font-bold'>What are the different ways to manage a state in a React application?</h1>
                <p >
                    Local (UI) state – Local state is data we manage in one or another component. <br />
                    Global (UI) state – Global state is data we manage across multiple components. <br />
                    Server state – Data that comes from an external server that must be integrated with our UI state. <br />
                    URL state – Data that exists on our URLs, including the pathname and query parameters.
                </p>
            </div>
            <div>
                <h1 className='text-xl text-primary font-bold'>How does prototypical inheritance work?</h1>
                <p >
                    prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. <br />
                    The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from Object.prototype.

                </p>
            </div>
            <div>
                <h1 className='text-xl text-primary font-bold'> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <p >
                    If you update it directly, calling the setState() afterward may just replace the update you made. <br />
                    When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. <br />
                    You will lose control of the state across all components.

                </p>
            </div>
            <div>
                <h1 className='text-xl text-primary font-bold'>What is a unit test? Why should write unit tests?</h1>
                <p >

                    -Unit Testing is used to check the independent modules of a software app during the development phase. An independent module can be anything like procedure, function, etc. Unit testing is done by developers and testers together before the integration testing. They have to write unit test cases as well if needed. <br />

                    One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.

                </p>
            </div>
        </div>
    );
};

export default Blogs;