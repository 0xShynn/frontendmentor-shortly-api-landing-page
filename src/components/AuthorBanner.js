import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const AuthorBanner = () => {
  return (
    <Flex justify="center" px="4" mb={{ base: 4, md: 10, lg: 16 }}>
      <Flex
        py="6"
        px="6"
        textAlign="center"
        align="center"
        rounded="lg"
        bg="primary.blackpurple"
      >
        <Text color="white" mt="0.5">
          Code challenge by{' '}
          <Link
            href="https://www.frontendmentor.io"
            target="_blank"
            _hover={{ textDecoration: 'underline' }}
          >
            Frontend Mentor
          </Link>{' '}
          • Made by{' '}
          <Link
            href="https://anhek.dev"
            target="_blank"
            _hover={{ textDecoration: 'underline' }}
          >
            Antonin Nhek
          </Link>
        </Text>
        <Link
          href="https://github.com/anhek/frontendmentor-shortly-api-landing-page"
          target="_blank"
          aria-label="Link to the Github repo of the code challenge"
          ml="4"
        >
          <Icon
            as={FaGithub}
            boxSize="8"
            color="white"
            transition="0.2s"
            _hover={{ color: 'primary.peach' }}
          />
        </Link>
      </Flex>
    </Flex>
  )
}

export default AuthorBanner
