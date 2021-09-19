import Icon from '@chakra-ui/icon'
import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/layout'

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

const Footer = () => {
  return (
    <Box bg="primary.footerpurple" w="full" role="contentinfo" py="16" px="6">
      <Flex
        justify="center"
        align="center"
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box w="120px" mb="12">
          <ShortlyLogo color="white" />
        </Box>
        <Stack align="center" textAlign="center">
          {navLinks.map((section, index) => (
            <Box key={index}>
              <Heading as="h4" variant="h4" color="white" mb="6">
                {section.title}
              </Heading>
              <Stack color="secondary.gray" mb="8">
                {section.links.map((link, index) => (
                  <Link key={index} url={link.url} fontWeight="400">
                    {link.title}
                  </Link>
                ))}
              </Stack>
            </Box>
          ))}
          <Stack direction="row" spacing="6">
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
        </Stack>
      </Flex>
    </Box>
  )
}

export default Footer
