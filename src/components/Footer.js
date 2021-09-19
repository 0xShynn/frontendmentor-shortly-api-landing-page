import Icon from '@chakra-ui/icon'
import { Box, Heading, Link, Stack } from '@chakra-ui/layout'

import ShortlyLogo from '../assets/brand/ShortlyLogo'
import IconFacebook from '../assets/icons/IconFacebook'
import IconInstagram from '../assets/icons/IconInstagram'
import IconPinterest from '../assets/icons/IconPinterest'
import IconTwitter from '../assets/icons/IconTwitter'

const socialIcons = [
  <IconFacebook key="1" />,
  <IconTwitter key="2" />,
  <IconPinterest key="3" />,
  <IconInstagram key="4" />,
]

const navLinks = [
  {
    title: 'Features',
    links: [
      {
        title: 'Link Shortening',
        url: '#',
      },
      { title: 'Branded Links', url: '#' },
      { title: 'Analytics', url: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        title: 'Blog',
        url: '#',
      },
      { title: 'Developers', url: '#' },
      { title: 'Support', url: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        title: 'About',
        url: '#',
      },
      { title: 'Our Team', url: '#' },
      { title: 'Carrers', url: '#' },
      { title: 'Contact', url: '#' },
    ],
  },
]

const SocialStack = ({ display }) => {
  return (
    <Stack direction="row" spacing="6" display={display}>
      {socialIcons.map((icon, index) => (
        <Icon
          key={index}
          boxSize={{ base: '24px' }}
          color="white"
          cursor="pointer"
          _hover={{ color: 'primary.teal' }}
        >
          {icon}
        </Icon>
      ))}
    </Stack>
  )
}

const Footer = () => {
  return (
    <Box
      bg="primary.footerpurple"
      w="full"
      role="contentinfo"
      py="16"
      px={{ base: 6, md: 12 }}
    >
      <Stack
        align={{ base: 'center', md: 'flex-start' }}
        justify={{ md: 'space-between' }}
        textAlign={{ base: 'center', md: 'left' }}
        direction={{ base: 'column', md: 'row' }}
        spacing={{ md: 16, lg: 24 }}
        maxW="1110px"
        mx="auto"
      >
        <Box flex="1">
          <Box w="120px" mb={{ base: 12, md: 8 }}>
            <ShortlyLogo color="white" />
          </Box>
          <SocialStack display={{ base: 'none', md: 'flex', xl: 'none' }} />
        </Box>

        {navLinks.map((section, index) => (
          <Box key={index}>
            <Heading as="h4" variant="h4" color="white" mb="6">
              {section.title}
            </Heading>
            <Stack color="secondary.gray" mb="8">
              {section.links.map((link, index) => (
                <Link
                  key={index}
                  url={link.url}
                  fontWeight="400"
                  _hover={{ color: 'primary.teal' }}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Box>
        ))}

        <SocialStack display={{ md: 'none', xl: 'flex' }} />
      </Stack>
    </Box>
  )
}

export default Footer
