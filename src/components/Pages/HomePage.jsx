// src/components/hero/HomePage.js

import Mentor from '../hero/Hero';
import About from '../hero/About';
import Feature from '../hero/Feature';
import Try from '../hero/Try';
import Job from '../hero/Job';
import Faq from '../hero/Faq'; 
import Value from '../hero/value'

const HomePage = () => {
    return (
        <div>
            <Mentor />
            <About />
            <Feature/>
            <Job/>
            <Value/>

            <Faq/>
            <Try/> 
        </div>
    );
};

export default HomePage;
