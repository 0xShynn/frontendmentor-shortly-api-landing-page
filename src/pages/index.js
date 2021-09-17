import { Box } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <Box>
      {/* Edit the Head info */}
      <NextSeo title="Home" description="Description" />

      <Box role="main" bg="white">
        <Header />
        <Hero />
      </Box>

      <Box role="contentinfo"></Box>
    </Box>
  )
}
