import { Box, Heading, Text } from '@chakra-ui/layout'

const Service = ({ title, text, icon }) => {
  return (
    <Box bg="white" rounded="md" pb="10" px="8" maxW="400px">
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
      <Heading as="h3" variant="h3" mb="4">
        {title}
      </Heading>
      <Text>{text}</Text>
    </Box>
  )
}

export default Service
