// src/components/hero/HomePage.js

import Mentor from '../hero/Hero';
import About from '../hero/About';
import Feature from '../hero/Feature';
import Try from '../hero/Try';
import Job from '../job/Job'

const HomePage = () => {
    return (
        <div>
            <Mentor />
            <About />
            <Feature/>
            <Job/>
            <Try/>
        </div>
    );
};

export default HomePage;
