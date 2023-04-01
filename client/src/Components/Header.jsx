import { Container, createStyles, Flex, Text } from '@mantine/core'
import DarkThemeButton from './DarkModeButton'

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[1],
    // Simplify media query writing with theme functions
    [theme.fn.smallerThan('lg')]: {
      paddingLeft: '25px',
      paddingRight: '25px',
    },
    [theme.fn.smallerThan('sm')]: {
      paddingLeft: '15px',
      paddingRight: '15px',
    },
  },
}))

function AppHeader() {
  const { classes } = useStyles()
  return (
    <Container
      className={classes.wrapper}
      px="50px"
      size="100%"
      pt="15px"
      pb="20px"
    >
      <Flex direction="row" align="center" justify="space-between">
        <Text tt="uppercase" fw="bold" fz="lg">
          Room Booking
        </Text>
        <DarkThemeButton />
      </Flex>
    </Container>
  )
}

export default AppHeader
