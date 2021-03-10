import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Box, Grid, Container } from '@material-ui/core'

const MenuItem = () => {
    return (
        <Layout>
            <SEO title='Just a test' />
            <Container style={{marginTop: '8em'}}>
                <Grid container alignItems='center' justify='center'>
                    <Box clone order={{xs: 3, md: 2}} >
                        <Grid item xs={12} md={6}>
                            <StaticImage placeholder="tracedSVG" src='../images/home-screen-food.jpg' alt='testing' />
                        </Grid>
                    </Box>
                    <Box clone order={{xs: 2, md: 3}}>
                        <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                            <h1 style={{color: '#88BF90'}}>Menu Product Name</h1>
                            <h5 style={{marginBottom: 0, margin: '15px 0', padding: '0 40px', fontWeight: '200'}}>This is a short description which might change but is important in frontmatter</h5>
                            <h3 style={{fontWeight: '200'}}>$13.99</h3>
                        </Grid>
                    </Box>
                </Grid>
                {/* md Body */}
                <div style={{margin: '1em 0', textAlign: 'center'}}>
                    <h2>This is md body</h2>
                    <p>You can type whatever in this and not make sense, all you gotta do is reformat so it cna look much better later on</p>
                    <strong>Here you could type the ingredients unless they were to be used for the frontmatter</strong>
                    <br/><br/><strong>Nutrition facts might as well go inside here, unless requirements change</strong>
                </div>
            </Container>
        </Layout>
    )
}

export default MenuItem