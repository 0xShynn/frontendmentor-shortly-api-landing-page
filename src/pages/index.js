import { Box } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

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
      </Box>

      <Box role="contentinfo"></Box>
    </Box>
  )
}
