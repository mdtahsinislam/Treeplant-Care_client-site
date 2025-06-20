import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Addplants from './Addplants';
import Plantall from './Plantall';
import Banner from './Banner';
import Abanner from './Abanner';
import Newplant from './Newplant';
import Team from './Team';
import Feadback from './Feadback';
import Wellcome from './Wellcome';
import Award from './Award';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Banner></Banner>
           <Abanner></Abanner>
           <Wellcome></Wellcome>
           <Newplant></Newplant>
           <Team></Team>
           <Feadback></Feadback>
           <Award></Award>
            <Footer></Footer>
        </div>
    );
};

export default Home;