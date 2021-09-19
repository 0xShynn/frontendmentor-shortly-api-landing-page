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
        align={{ base: 'center', md: 'flex-start' }}
        w="full"
        mx="auto"
        maxW="1110px"
      >
        <Box overflow="hidden" w="full" display={{ base: 'block', lg: 'none' }}>
          <Box
            pos="relative"
            right={{ base: '-30px', md: 0 }}
            pt={{ md: 6 }}
            w={{ base: '100%', sm: '120%', md: '140%' }}
          >
            <NextImage src={IllustrationWork} layout="responsive" />
          </Box>
        </Box>

        <Box
          maxW="565px"
          pl={{ base: 6, md: 12, xl: 0 }}
          pr={{ base: 6, md: 6, xl: 0 }}
          pt={{ base: '30px', lg: '36px', lg2: '64px', xl: '100px' }}
          pb={{ base: 36, md: 36, lg: 44, xl: 52 }}
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
