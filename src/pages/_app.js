import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'
import overrides from '../theme/index'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={overrides}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
