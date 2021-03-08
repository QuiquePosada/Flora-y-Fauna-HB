import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
// import material-ui components
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import InstagramIcon from '@material-ui/icons/Instagram'

const Footer = ({ data, sectionData }) => {
    return (
      <footer style={{marginTop: '1em', color: 'white', backgroundColor: '#88BF90',}}>
        <Grid container alignItems='center' justify='space-between' style={{padding: '25px'}}>
            {/* <div style={{width: '20%'}}><Img style={{borderRadius: '100%'}} fluid={data.logo.childImageSharp.fluid} /></div> */}
            <Grid item xs={3} md={3}>
              <div>
                <Link to="/">
                  <StaticImage
                    src="../images/footer-logo.jpg"
                    imgStyle={{borderRadius: '100%'}}
                    style={{borderRadius: '100%'}} // both border-radius help show on load a rounded img
                    alt="Footer_logo"
                  />
                </Link>
              </div>
            </Grid>
          <Grid item xs={9} md={3}>
            <ul style={{listStyle: 'none', margin: 0,}}>
              {sectionData.map(({label,ref},index) => {
                return (
                  <li key={index}><h2 key={index} style={{margin: '0 10px', textTransform: 'uppercase', fontWeight: '500'}}>{label}</h2></li>
                )
              })}
            </ul>
          </Grid>
          <Grid item xs={12} md={3} style={{textAlign: 'center'}}>
              <IconButton href="https://www.instagram.com/florafauna.hb/" style={{color: 'white'}} aria-label={`Follow us on Instagram`} >
                <InstagramIcon />
              </IconButton>
          </Grid>
        </Grid>
        <h4 style={{margin: '0', textAlign: 'center', paddingBottom: '30px'}}>© {data.site.siteMetadata.title} {new Date().getFullYear()}</h4>
      </footer>
    );
}

export default Footer
