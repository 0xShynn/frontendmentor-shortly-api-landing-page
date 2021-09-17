import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { CloseIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, HStack, Link, VStack } from '@chakra-ui/layout'

import ShortlyLogo from '../assets/brand/ShortlyLogo'
import IconCLose from '../assets/icons/IconClose'

const Header = () => {
  const { isOpen, onToggle } = useDisclosure()
  const navLinks = [
    { title: 'Features', url: '#' },
    { title: 'Pricing', url: '#' },
    { title: 'Resources', url: '#' },
  ]

  return (
    <Box maxW="1110px" w="full">
      <Flex justify="space-between" align="center" w="full">
        <Flex align="center">
          <Link href="/" size="none" mr="10">
            <Box w="120px">
              <ShortlyLogo />
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
                <IconCLose boxSize="24px" color="secondary.midgray" />
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
        >
          <Box
            bg="primary.darkpurple"
            px="6"
            rounded="lg"
            mt="6"
            py="10"
            w={{ base: 'full', md: '375px' }}
          >
            <VStack>
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  color="white"
                  fontSize="18px"
                  onClick={onToggle}
                >
                  {link.title}
                </Link>
              ))}
            </VStack>
            <Divider borderColor="white" opacity="0.2" my="4" />
            <VStack>
              <Link href="#" color="white" fontSize="18px" onClick={onToggle}>
                Login
              </Link>
              <Link
                href="#"
                variant="primary"
                w="full"
                textAlign="center"
                fontSize="18px"
                onClick={onToggle}
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
