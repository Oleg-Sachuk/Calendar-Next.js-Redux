import Header from '../components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useState } from 'react';
import MainContainer from '../components/Main/MainContainer';

const About = () => {
  const [popup, setPopup] = useState(false);

  return (<>
    <Head><title>Oleg's project</title></Head>
    <Header>
      <MainContainer />
    </Header>
  </>)
}

export default About;