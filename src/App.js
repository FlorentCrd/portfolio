import React from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Nav from "./components/Nav";
import Work from "./components/Work";

const App = () => {
    return (
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
           <Header/>
            <Banner/>
            <Nav/>
            <About/>
            <Services/>
            <Work/>
            <Contact/>
            {<div className='h-[4000px]'></div>}
        </div>
    );
};

export default App;