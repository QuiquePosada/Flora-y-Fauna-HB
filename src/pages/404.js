
import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
// import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
// import SEO from '../components/seo'

const NotFoundPage = () => {
    return (
        <Layout>
        {/* <SEO title="404: Página No Encontrada" /> */}
        {/* <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
        
        <div>
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
        </div>
            {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Y8Wp3dafaMQ"
        srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Y8Wp3dafaMQ?autoplay=1><img src=https://img.youtube.com/vi/Y8Wp3dafaMQ/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition"
        ></iframe> */}
    </Layout>
    )
}

export default NotFoundPage
