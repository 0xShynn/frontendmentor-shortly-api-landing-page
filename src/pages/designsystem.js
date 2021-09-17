import { Button } from '@chakra-ui/button'
import { Box, Heading, HStack, Link, Text, VStack } from '@chakra-ui/layout'

const DesignSystem = () => {
  return (
    <Box maxW="650px" mx="auto" pt="24">
      <VStack spacing="4" align="flex-start">
        <Heading as="h1" variant="h1">
          h1. More than just shorter links
        </Heading>
        <Heading as="h2" variant="h2">
          h2. Advanced Statistics
        </Heading>
        <Heading as="h3" variant="h3">
          h3. Brand Recognition
        </Heading>
        <Text textStyle="big">
          Big. Build your brand’s recognition and get detailed insights on how
          your links are performing.
        </Text>
        <Text textStyle="medium">
          Medium. Track how your links are performing across the web with our
          advanced statistics dashboard.
        </Text>
        <Text>
          Normal. Boost your brand recognition with each click. Generic links
          don’t mean a thing. Branded links help instil confidence in your
          content.
        </Text>
        <HStack>
          <Text>Link</Text>
          <Link variant="primary" size="md" href="/">
            Get Started
          </Link>
          <Link variant="primary" size="sm" href="/">
            Sign Up
          </Link>
        </HStack>
        <HStack>
          <Text>Button</Text>
          <Button variant="primary" size="lg">
            Shorten It!
          </Button>
          <Button variant="primary" size="md">
            Copy
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
}

export default DesignSystem
