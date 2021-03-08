import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { graphql, useStaticQuery } from 'gatsby'

// styles
const header = {
    padding: '20px 0',
    backgroundColor: '#88BF90',
    color: 'white'
}

// markup
const IndexPage = () => {
    const staticQuery = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title={`Inicio | ${staticQuery.site.siteMetadata.title}`} description={staticQuery.site.siteMetadata.description} />
            <div style={{height: '100vh'}} className="bgImgContainer">
                <Container style={{display: 'flex', height: '100%', alignItems: 'center',}} maxWidth="xs" >
                    <StaticImage
                        src="../images/logo.jpg"
                        imgStyle={{borderRadius: '100%'}} 
                        style={{borderRadius: '100%'}} // both border-radius help show on load a rounded img
                        placeholder="blurred"
                    />
                </Container>
                <StaticImage src="../images/home-screen-food.jpg" 
                    className="bgImg"
                    placeholder="tracedSVG"
                />
            </div>
            
            <h1 style={header}>Me encanta la pizza :)</h1>
            {/* About Us */}
            <div id="aboutUs" style={{margin: '50px'}}>
                <h1 style={{ color: '#F28095' }}>Acerca de Nosotros</h1>
                <Grid container alignItems="center" >
                    <Box clone order={{ xs: 3, md: 2 }}>
                        <Grid item xs={12} md={6} style={{flexGrow: 1}}>
                            <StaticImage src="../images/home-screen-food.jpg" />
                        </Grid>
                    </Box>
                    <Box clone order={{ xs: 2, md: 3 }}>
                        <Grid md={6} item>
                        <h3 style={{textAlign: 'center', margin: 0, lineHeight: 1}}><em style={{color: '#88BF90'}}>{staticQuery.site.siteMetadata.title},</em></h3>
                        <h5 style={{textAlign: 'center'}}>Donde comer bien es sentirse bien</h5>
                        <div style={{margin: '10px'}}>
                            <p>
                            <em>{staticQuery.site.siteMetadata.title}</em> nace por el equilibrio perfecto de la comida animal y vegetal, con recetas a base de ingredientes <strong>naturales</strong> y <strong>frescos</strong>, avalados por nuestra Nutrióloga.
                            <br/>Nos enfocamos en el concepto de una vida saludable, consumiendo alimentos de la mejor calidad y frescura.
                            <em>Cambiar por iconos que representen calidad y fresucra, asi como alimentos naturales y la nutriologa</em>
                            </p>
                            <h4 style={{textAlign: 'center'}}>Les damos la bienvenida a <em style={{color: '#88BF90'}}>{staticQuery.site.siteMetadata.title}</em>, <strong style={{color: '#F28095'}}>¡buen provecho!</strong></h4>
                        </div>
                        </Grid>
                    </Box>
                </Grid>
            </div>
            {/* Img bg */}
            <div style={{height: '30em', justifyContent: 'center', alignItems: 'center'}} className="bgImgContainer overlay">
                <h1 style={{color: 'white'}}>MMMMM, ya se antojan unas buenas <em>pizzas</em></h1>
                <StaticImage src="../images/header.jpg" className="bgImg" />
            </div>
            {/* IG */}
            <div>
                <h1 style={{ marginTop: '15px', lineHeight: 1, color: '#F28095' }}>Siguenos en Instagram <em><a className="link"  href="https://www.instagram.com/florafauna.hb/">@florafauna.hb</a></em></h1>
            </div>
        </Layout>
    )
}

export default IndexPage
