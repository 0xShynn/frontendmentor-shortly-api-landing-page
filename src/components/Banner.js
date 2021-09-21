import { Flex, Heading, Link } from '@chakra-ui/layout'

const Banner = () => {
  return (
    <Flex
      bgImage="/images/bg-boost-desktop.svg"
      bgPos="center"
      bgSize="cover"
      py={{ base: 24, lg: 16 }}
      px="6"
      bgColor="primary.darkpurple"
      align="center"
      direction="column"
      role="region"
      aria-label="Banner"
    >
      <Heading as="h5" variant="h2" color="white" mb={{ base: 4, xl: 8 }}>
        Boost your links today
      </Heading>
      <Link href="#" variant="primary" size="md" display="inline-block">
        Get Started
      </Link>
    </Flex>
  )
}

export default Banner
