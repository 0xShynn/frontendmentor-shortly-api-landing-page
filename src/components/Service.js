import { Box, Heading, Text } from '@chakra-ui/layout'

const Service = ({ title, text, icon, index }) => {
  return (
    <Box
      bg="white"
      rounded="md"
      pb="10"
      px="8"
      maxW="350px"
      textAlign={{ base: 'center', lg: 'left' }}
      pos="relative"
      top={{ base: 'unset', lg: index === 1 ? '-42px' : 'unset' }}
      bottom={{ base: 'unset', lg: index === 3 ? '-42px' : 0 }}
    >
      <Box
        p="6"
        bg="primary.darkpurple"
        rounded="full"
        display="inline-block"
        position="relative"
        top="-42px"
      >
        {icon}
      </Box>
      <Heading as="h4" variant="h3" mb="4">
        {title}
      </Heading>
      <Text>{text}</Text>
    </Box>
  )
}

export default Service
