import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout'
import NextImage from 'next/image'

import IllustrationWork from '../assets/illustrations/illustration-working.svg'

const Hero = () => {
  return (
    <Box
      w="full"
      bgImage={{ base: 'none', lg: '/images/illustration-working.svg' }}
      bgRepeat="no-repeat"
      bgPos={{ lg: '550px 20px', lg2: '650px 40px', xl: '850px 50px' }}
      bgSize={{ lg: '533px', lg2: '633px', xl: '733px' }}
      maxW="1640px"
      mx="auto"
    >
      <Flex
        direction={{ base: 'column', md: 'row-reverse', lg: 'row' }}
        align="center"
        w="full"
        mx="auto"
        maxW="1110px"
      >
        <Box overflow="hidden" w="full" display={{ base: 'block', lg: 'none' }}>
          <Box
            pos="relative"
            right={{ base: '-30px', md: '0' }}
            w={{ base: '100%', sm: '120%', md: '130%' }}
          >
            <NextImage src={IllustrationWork} layout="responsive" />
          </Box>
        </Box>

        <Box
          maxW="565px"
          px={{ base: 6, xl: 0 }}
          py={{ base: '30px', lg: '36px', lg2: '64px', xl: '100px' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading
            as="h1"
            variant="h1"
            mb="2"
            maxW={{ base: 'unset', lg: '420px', xl: 'unset' }}
          >
            More than just shorter links
          </Heading>
          <Text
            textStyle="big"
            mb="10"
            maxW={{ base: 'unset', lg: '420px', xl: 'unset' }}
          >
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </Text>
          <Link href="#" variant="primary" display="inline-block" size="md">
            Get Started
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero
