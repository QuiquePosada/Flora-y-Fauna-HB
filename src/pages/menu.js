import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Grid from '@material-ui/core/Grid'

const img1 = "../images/header.jpg"
const img2 = "../images/home-screen-food.jpg"

const products = [
    {
        title: "Tacos",
        price: 423.09,
        description: "These are tacos and I like tacos",
        featuredImage: img1
    },
    {
        title: "Burgers",
        price: 25.99,
        description: "Yummy and delicious burgers",
        featuredImage: img2
    },
    {
        title: "Pizza",
        price: 199.00,
        description: "Nothing like some good and deliciouse, exquisite pizza. It doesn't matter, I just wanna have some nice ol' pizza",
        featuredImage: img1
    },
    {
        title: "Chicken Wings",
        price: 200.99,
        description: "Some chimckeennn and some blue cheese with fries makes wings a delicacy",
        featuredImage: img2
    },
]

const Menu = () => {
    const staticQuery = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
            allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "menu-item"}}}) {
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
    return (
        <Layout>
            <SEO title={`Menú | ${staticQuery.site.siteMetadata.title}`} description="Conoce nuestro menú y disfruta de nuestra comida"/>
            <h1 style={{marginTop: '3.5em', color: '#F28095'}}>Conoce Nuestro Menu</h1>
            { 
                staticQuery.allMarkdownRemark.edges.length === 1 ? 
                    <GridList spacing={0} cellHeight='auto' cols={2}>
                        <GridListTile style={{padding: 0,margin: 0}} cols={2}>
                            <div style={{height: '30vw', justifyContent: 'center', alignItems: 'center'}} className='bgImgContainer overlay'>
                                    <h1 style={{color: 'white'}}>Si ves esto, entonces no tenemos un menu :((((</h1>
                                    <StaticImage placeholder='blurred' style={{margin: 0, padding: 0, height: '30vw'}} className='bgImg' src='../images/empty-plate.jpg' alt='empty-plate' />
                            </div>
                        </GridListTile>
                        <GridListTile>
                            <StaticImage placeholder='blurred' style={{margin: 0, padding: 0, height: '30vw'}} src='../images/sad-dog.jpg' alt='sad-dog' />
                        </GridListTile>
                        <GridListTile>
                            <StaticImage placeholder='blurred' style={{margin: 0, padding: 0, height: '30vw'}} src='../images/empty.jpg' alt='empty' />
                        </GridListTile>
                    </GridList>
                :
                    <div>
                        <h2 style={{textAlign: 'center', color: '#88BF90'}}><strong>{staticQuery.site.siteMetadata.description}</strong></h2>
                        <Grid container spacing={0} style={{padding: '20px'}} >
                            {products.map((item, index) => (
                                <Grid item md={4} key={index} style={{textAlign: 'center', padding: '0 5px'}}>
                                    <StaticImage placeholder="blurred" src={img1} alt={item.title} />
                                    {/* <h6 style={{margin: 0, fontWeight: '200'}}><i>#tacos, #niceFood, #great</i></h6> */}
                                    <h6 style={{marginBottom: 0, margin: '15px 0', padding: '0 40px', fontWeight: '200'}}>{item.description}</h6>
                                    <h2 style={{marginTop: '10px', color: '#88BF90', marginBottom: '5px'}}>{item.title}</h2>
                                    <h3 style={{fontWeight: '300'}}>${item.price.toFixed(2)}</h3>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
            }
        </Layout>
    )
}

export default Menu 
