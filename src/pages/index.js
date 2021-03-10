import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { nutrition, naturalIngredients, quality} from '../icons/icons'
// import { getInstaFeed } from '../functions/getInsta'

// styles
const header = {
    padding: '20px 0',
    backgroundColor: '#88BF90',
    color: 'white'
}
const iconStyle = {
    backgroundColor: '#88BF90', 
    borderRadius: '100%', 
    height: '20vh', 
    padding: '5px'
}
const iconDescription = {
    fontWeight: '200',
    margin: '0 15%',
    textTransform: 'uppercase',
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
            featuredMenu: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "menu-item"}, isFeatured: {eq: false}}}) {
                edges {
                    node {
                        frontmatter {
                            title
                        }
                    }
                }
              }
        }
    `)

    // const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     const id = 45856047939
    //     const postsLimit = 1
    //     const fetchPosts = async() => {
    //         const res = await getInstaFeed(id, postsLimit)
    //         if(res.status === 200){
    //             console.log("IG Fetch SUCCESS!!")
    //             const postsRes = res.data.data.user.edge_owner_to_timeline_media.edges
    //             setPosts(postsRes)
    //         }
    //     }
    //     fetchPosts()
    // }, [])

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
                        alt="logo"
                    />
                </Container>
                <StaticImage src="../images/home-screen-food.jpg" 
                    className="bgImg"
                    placeholder="tracedSVG"
                    alt="BgImg1"
                />
            </div>
            
            <h1 style={header}>Me encanta la pizza :)</h1>
            {/* About Us */}
            <div id="aboutUs" style={{margin: '50px'}}>
                <h1 style={{ color: '#F28095' }}>Acerca de Nosotros</h1>
                <Grid container alignItems="center" >
                    <Box clone order={{ xs: 3, md: 2 }}>
                        <Grid item xs={12} md={6} style={{flexGrow: 1}}>
                            <StaticImage src="../images/home-screen-food.jpg" alt="aboutUs" />
                        </Grid>
                    </Box>
                    <Box clone order={{ xs: 2, md: 3 }}>
                        <Grid md={6} item>
                            <h3 style={{textAlign: 'center', margin: 0, lineHeight: 1}}><em style={{color: '#88BF90'}}>{staticQuery.site.siteMetadata.title},</em></h3>
                            <h4 style={{textAlign: 'center', marginTop: '15px'}}>Donde comer bien es sentirse bien</h4>
                            <div style={{margin: '10px'}}>
                                {/* <p>
                                <em>{staticQuery.site.siteMetadata.title}</em> nace por el equilibrio perfecto de la comida animal y vegetal, con recetas a base de ingredientes <strong>naturales</strong> y <strong>frescos</strong>, avalados por nuestra Nutrióloga.
                                <br/>Nos enfocamos en el concepto de una vida saludable, consumiendo alimentos de la mejor calidad y frescura.
                                <em>Cambiar por iconos que representen calidad y fresucra, asi como alimentos naturales y la nutriologa</em>
                                </p> */}
                                <Grid container alignItems='flex-start' justify='center' style={{textAlign: 'center'}} >
                                    <Grid item xs={12} md={4} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                        <img alt="icon-1" style={iconStyle} src={naturalIngredients} />
                                        <h5 style={iconDescription}>Nos enfocamos en el concepto de una vida saludable, con alimentos frescos y naturales</h5>
                                    </Grid>
                                    <Grid item xs={12} md={4} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                        <img alt="icon-2" style={iconStyle} src={quality} />
                                        <h5 style={iconDescription}>Contamos con alimentos de la más alta calidad</h5>
                                    </Grid>
                                    <Grid item xs={12} md={4} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                        <img alt="icon-3" style={iconStyle} src={nutrition} />
                                        <h5 style={iconDescription}>Nuestras recetas son avaladas por nuestra Nutrióloga</h5>
                                    </Grid>
                                </Grid>
                                <h4 style={{textAlign: 'center', marginTop: '10px'}}>Les damos la bienvenida a <em style={{color: '#88BF90'}}>{staticQuery.site.siteMetadata.title}</em>, <strong style={{color: '#F28095'}}>¡buen provecho!</strong></h4>
                            </div>
                        </Grid>
                    </Box>
                </Grid>
            </div>
            {/* FeaturedMenu */}
            {
                staticQuery.featuredMenu.edges.length === 0 ? null :
                <div>
                    <h1 style={{color: '#F28095'}}>Conoce Algunos De Nuestros Platillos Favoritos</h1>
                    <h3 style={{textAlign: 'center'}}><em>Presiona para conocer <Link className="link" to="/menu">nuestro menu</Link></em></h3>
                </div>
            }
            {/* Img bg */}
            <div style={{height: '30em', justifyContent: 'center', alignItems: 'center'}} className="bgImgContainer overlay">
                <h1 style={{color: 'white'}}>MMMMM, ya se antojan unas buenas <em>pizzas</em></h1>
                <StaticImage src="../images/header.jpg" className="bgImg" alt="BgImg2" />
            </div>
            {/* IG */}
            <div>
                <h1 style={{ marginTop: '15px', lineHeight: 1, color: '#F28095' }}>Siguenos en Instagram <em><a className="link"  href="https://www.instagram.com/florafauna.hb/">@florafauna.hb</a></em></h1>
            </div>
        </Layout>
    )
}

export default IndexPage
