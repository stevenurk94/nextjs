import Layout from '../components/Layout';
import '../styles/globals.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    document.body.setAttribute("data-scroll-container", "");
  })

  return (

    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
    >

    <Layout>
      <Component {...pageProps} />
    </Layout>

    </LocomotiveScrollProvider>
  )
}

export default MyApp;
