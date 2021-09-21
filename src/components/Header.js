import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { CloseIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, HStack, Link, VStack } from '@chakra-ui/layout'

import ShortlyLogo from '../assets/brand/ShortlyLogo'
import IconClose from '../assets/icons/IconClose'

const Header = () => {
  const { isOpen, onToggle } = useDisclosure()
  const navLinks = [
    { title: 'Features', url: '#' },
    { title: 'Pricing', url: '#' },
    { title: 'Resources', url: '#' },
  ]

  return (
    <Box maxW="1110px" w="full" mx="auto">
      <Flex
        justify="space-between"
        align="center"
        w="full"
        py="12"
        px={{ base: 6, xl: 0 }}
      >
        <Flex align="center">
          <Link href="/" size="none" mr="10" aria-label="Shortly logo">
            <Box w="120px">
              <ShortlyLogo color="#34313D" />
            </Box>
          </Link>

          <HStack spacing="8" display={{ base: 'none', lg: 'block' }}>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                color="secondary.midgray"
                size="none"
              >
                {link.title}
              </Link>
            ))}
          </HStack>
        </Flex>

        <Box display={{ base: 'none', lg: 'block' }}>
          <Link href="#" size="none" color="secondary.midgray" mr="10">
            Login
          </Link>
          <Link href="#" variant="primary" size="sm">
            Sign Up
          </Link>
        </Box>

        <Box display={{ base: 'block', lg: 'none' }}>
          <IconButton
            colorScheme="whiteAlpha"
            aria-label="Open Menu"
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon color="secondary.midgray" boxSize="20px" />
              ) : (
                <IconClose boxSize="24px" color="secondary.midgray" />
              )
            }
            zIndex="overlay"
          />
        </Box>
      </Flex>

      {isOpen ? (
        <Flex
          justify={{ base: null, md: 'flex-end' }}
          display={{ base: 'flex', lg: 'none' }}
          pos="absolute"
          zIndex="dropdown"
          w="full"
          pt="90px"
          top="0"
        >
          <Box
            bg="primary.darkpurple"
            px="6"
            rounded="lg"
            mt="6"
            py="10"
            w={{ base: 'full', md: '375px' }}
            mx="6"
          >
            <VStack>
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  color="white"
                  fontSize="18px"
                  onClick={onToggle}
                  size="md"
                >
                  {link.title}
                </Link>
              ))}
            </VStack>
            <Divider borderColor="white" opacity="0.2" my="4" />
            <VStack>
              <Link
                href="#"
                color="white"
                fontSize="18px"
                onClick={onToggle}
                size="md"
              >
                Login
              </Link>
              <Link
                href="#"
                variant="primary"
                w="full"
                textAlign="center"
                fontSize="18px"
                onClick={onToggle}
                size="md"
              >
                Sign Up
              </Link>
            </VStack>
          </Box>
        </Flex>
      ) : null}
    </Box>
  )
}

export default Header
