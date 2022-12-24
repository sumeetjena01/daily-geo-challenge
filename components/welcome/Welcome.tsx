import { Card } from "@chakra-ui/react"
import WelcomeItems from "./WelcomeItems"
import WelcomeFooter from "./WelcomeFooter"

/**
 * Welcome: card component
 * @constructor
 */
export default function Welcome() {
  return (
    <Card
      my={20}
      maxW="lg"
      marginX="auto"
      borderRadius={15}
      border="1px"
      borderColor="tertiary"
    >
      <WelcomeItems />
      <WelcomeFooter />
    </Card>
  )
}
