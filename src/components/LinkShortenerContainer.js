import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Flex } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { useForm } from 'react-hook-form'

const LinkShortenerContainer = () => {
  const buttonSizeVariant = useBreakpointValue({ base: 'md', md: 'lg' })

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
        reset()
      }, 1000)
    })
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
        <Box bg="primary.purple" p={{ base: 6, md: 10, xl: 16 }} rounded="lg">
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
      </Box>
    </Box>
  )
}

export default LinkShortenerContainer
