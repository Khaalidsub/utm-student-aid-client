import * as React from "react"
import {
  Box,
  Center,
  ChakraProvider,

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
        <Center >
          <Home />
        </Center>
      </Grid>
    </Box>
  </ChakraProvider>
)
