import { Box } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home() {
  return (
    <Box>
      {/* Edit the Head info */}
      <NextSeo title="Home" description="Description" />

      <Box role="main" bg="white">
        <Header />
        <Hero />
        <Services />
        <Banner />
      </Box>

      <Footer />
    </Box>
  )
}
