
import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
// import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import RickRoll from '../images/rickroll.gif'

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="404: Página No Encontrada" />
        {/* <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
            <div style={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} className="overlay bgImgContainer">
                <h1 style={{color: '#BDD9A9'}}>404: Pagina No Encontrada</h1>
                <h2 style={{color: '#F28095', textAlign: 'center'}}>Te perdiste, así que disfruta un poco de este <a className="link" href="https://www.youtube.com/embed/bxqLsrlakK8?autoplay=1&loop=1&controls=0&disablekb=1">clasico</a></h2>
                <div style={{width: '12em'}}>
                    <StaticImage
                        src="../images/footer-logo.jpg"
                        imgStyle={{borderRadius: '100%'}}
                        style={{borderRadius: '100%'}}
                        alt="rickRollLogo"
                    />
                </div>
                <img src={RickRoll} className="bgImg" alt="ClassicRickRoll" />
            </div>
        {/* <div>
            <iframe 
                src="https://www.youtube.com/embed/bxqLsrlakK8?autoplay=1&loop=1&controls=0&disablekb=1"
                wmode="Opaque"
                width="100%" 
                style={{height: '95vh', margin: 0}}
                color="#BDD9A9"
                allow="accelerometer; autoplay; loop; encrypted-media; gyroscope;"
                title="A good ole' Rick Roll ;)"></iframe>
            <div style={{position: 'absolute', textAlign: 'center', top: 0, height: '95%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} className="overlay">
                <h1 style={{color: '#BDD9A9'}}>404: Pagina No Encontrada</h1>
                <h2 style={{color: '#F28095'}}>Te perdiste, así que disfruta un poco de este clásico</h2>
                <h4 style={{color: 'white'}}>P.S: No se puede ponerle pausa ;)</h4>
                <div style={{width: '12em'}}>
                    <StaticImage
                        src="../images/footer-logo.jpg"
                        imgStyle={{borderRadius: '100%'}} 
                    />
                </div>
            </div>
        </div> */}

    </Layout>
    )
}

export default NotFoundPage
