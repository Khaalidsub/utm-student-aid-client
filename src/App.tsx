import * as React from "react"
import {
  Box,
  Center,
  ChakraProvider,

  Container,

  Flex,

  Grid,

  theme,
} from "@chakra-ui/react"
import Home from "./Pages/Home"
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
// import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={5}>


        <Box my="auto" px={64} size="xl">
          <Home />

        </Box>

      </Grid>
    </Box>
  </ChakraProvider >
)
