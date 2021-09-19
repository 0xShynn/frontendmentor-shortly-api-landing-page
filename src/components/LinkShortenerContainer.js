import { useState, useEffect } from 'react'

import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Text, VStack } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import * as yup from 'yup'

const regMatch =
  /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/

const schema = yup.object().shape({
  link: yup.string().matches(regMatch, 'Please add a valid link').required(),
})

const LinkShortenerContainer = () => {
  const buttonSizeVariant = useBreakpointValue({ base: 'md', md: 'lg' })
  const [shortenedLinks, setShortenedLinks] = useState([])
  const [selectedLink, setSelectedLink] = useState(null)
  const [errorRes, setErrorRes] = useState(null)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) })

  async function getShortenedLink(url) {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .catch((err) => setErrorRes(err))

    return res.result.full_short_link
  }

  async function onSubmit(values) {
    const shortLink = await getShortenedLink(values.link)
    const id = uuid()
    const newShortenedLink = {
      originalLink: values.link,
      shortenedLink: shortLink,
      id,
    }
    setShortenedLinks([newShortenedLink, ...shortenedLinks])
    reset()
  }

  return (
    <Box px="6" bg="secondary.lightgray">
      <Box
        maxW="1110px"
        w="full"
        mx="auto"
        pos="relative"
        top={{ base: '-86px', md: '-70px', xl: '-94px' }}
      >
        <Box
          bg="primary.darkpurple"
          bgImage="/images/bg-shorten-desktop.svg"
          bgPos="center"
          bgSize="cover"
          p={{ base: 6, md: 10, xl: 16 }}
          rounded="lg"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.link} id="link">
              <Flex direction={{ base: 'column', md: 'row' }} align="center">
                <Box w="full">
                  <Input
                    placeholder="Shorten a link here..."
                    _placeholder={{
                      color: errors.link ? 'primary.red' : 'gray.500',
                      opacity: errors.link ? '0.6' : 1,
                    }}
                    fontSize={{ md: '18px', xl: '20px' }}
                    color="primary.blackpurple"
                    bg="white"
                    py={{ base: '22px', md: '28px', xl: '28px' }}
                    px={{ base: '14px', md: '16px', xl: '28px' }}
                    id="link"
                    {...register('link', {
                      required: 'Please add a link',
                      minLength: {
                        value: 4,
                        message: 'Minimum length should be 4',
                      },
                    })}
                  />

                  <FormErrorMessage
                    fontSize="xs"
                    color="primary.red"
                    mt="0"
                    display={{ base: 'block', md: 'none' }}
                    fontStyle="italic"
                  >
                    {errors.link && errors.link.message}
                  </FormErrorMessage>
                </Box>

                <Button
                  type="submit"
                  mt={{ base: errors.link ? 2 : 4, md: 0 }}
                  ml={{ base: 0, md: 4, xl: 6 }}
                  colorScheme="teal"
                  w={{ base: 'full', md: 'auto' }}
                  size={buttonSizeVariant}
                  isLoading={isSubmitting}
                >
                  Shorten It!
                </Button>
              </Flex>
              {errors.link && (
                <FormErrorMessage
                  pos="absolute"
                  fontSize={{ md: 'sm', xl: 'md' }}
                  fontStyle="italic"
                  mt={{ md: 0, xl: 1 }}
                  display={{ base: 'none', md: 'block' }}
                  color="primary.red"
                >
                  {errors.link.message}
                </FormErrorMessage>
              )}
            </FormControl>
          </form>
        </Box>
        {shortenedLinks.length > 0 ? (
          <VStack spacing="4" mt="6">
            {shortenedLinks.slice(0, 10).map((linkObj, index) => (
              <Flex
                key={index}
                bg="white"
                w="full"
                py="5"
                px="8"
                rounded="md"
                align="center"
                direction={{ base: 'column', md: 'row' }}
              >
                <Text
                  textStyle="medium"
                  color="primary.blackpurple"
                  flex="1"
                  wordBreak="break-all"
                >
                  {linkObj.originalLink}
                </Text>
                <Text
                  textStyle="medium"
                  color="primary.teal"
                  ml={{ base: 0, md: 6 }}
                  wordBreak="break-all"
                >
                  {linkObj.shortenedLink}
                </Text>
                <Button
                  minW="110px"
                  ml={{ base: 0, md: 6 }}
                  px="0"
                  variant={
                    selectedLink && linkObj.id === selectedLink.id
                      ? 'black'
                      : 'primary'
                  }
                  onClick={() => {
                    navigator.clipboard.writeText(linkObj.shortenedLink)
                    setSelectedLink(linkObj)
                  }}
                >
                  {selectedLink && linkObj.id === selectedLink.id
                    ? 'Copied!'
                    : 'Copy'}
                </Button>
              </Flex>
            ))}
          </VStack>
        ) : null}
        {errorRes ? (
          <Box
            bg="white"
            w="full"
            py="5"
            px="8"
            rounded="md"
            align="center"
            mt="6"
            borderColor="primary.red"
            borderWidth="1px"
          >
            <Text color="primary.red">{errorRes.error}</Text>
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}

export default LinkShortenerContainer
