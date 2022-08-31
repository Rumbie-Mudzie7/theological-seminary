import React from 'react';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import Galary from './components/Galary';
import Midsection from './components/Midsection';
import LeftInfo from './components/InfoSection/menu';
import RightInfo from './side';
import './main.css';
import AppSection from './components/Applications';

function App() {
  return (
    <>
      <Navbar />
      <MidSection className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3">
            <SideBar />
          </div>
          <div className="col-12 col-md-6">
            <Midsection />
          </div>
          <div className="col-12 col-md-3">
            <Galary />
          </div>
        </div>
      </MidSection>
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <LeftInfo />
          </div>
          <div className="col-12 col-md-8">
            <RightInfo />
          </div>
        </div>
      </div>
      <AppSection />
    </>
  );
}

const MidSection = styled.div`
  background-color: #EFEFEF;
`;

export default App;
