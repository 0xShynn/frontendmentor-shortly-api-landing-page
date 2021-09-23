import { Box } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import LinkShortenerContainer from '../components/LinkShortenerContainer'
import Services from '../components/Services'

export default function Home() {
  return (
    <Box>
      {/* Edit the Head info */}
      <NextSeo
        title="Home"
        description="Build your brand’s recognition and get detailed insights on how your links are performing."
      />

      <Box role="main" bg="white">
        <Header />
        <Hero />
        <LinkShortenerContainer />
        <Services />
        <Banner />
      </Box>

      <Footer />
    </Box>
  )
}
