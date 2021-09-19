import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'
import { useForm } from 'react-hook-form'

const LinkShortenerContainer = () => {
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
      <Box maxW="1110px" w="full" mx="auto" pos="relative" top="-82px">
        <Box bg="primary.purple" p="6" rounded="lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.link} id="link">
              <Input
                placeholder="Shorten a link here..."
                variant="unstyled"
                bg="white"
                p="3"
                _hover={{ bg: 'white' }}
                id="link"
                {...register('link', {
                  required: 'Please add a link',
                  minLength: {
                    value: 4,
                    message: 'Minimum length should be 4',
                  },
                })}
              />
              <Box>
                <FormErrorMessage fontSize="xs" mt="1">
                  {errors.link && errors.link.message}
                </FormErrorMessage>
              </Box>
              <Button
                type="submit"
                mt="4"
                colorScheme="teal"
                w="full"
                isLoading={isSubmitting}
              >
                Shorten It!
              </Button>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

export default LinkShortenerContainer
