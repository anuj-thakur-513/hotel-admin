import {
  ActionIcon,
  Button,
  Container,
  createStyles,
  Drawer,
  Flex,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconAdjustments, IconPlus } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BookingTable from '../Components/BookingTable'

const useStyles = createStyles((theme) => ({
  wrapper: {
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
  booking: {
    [theme.fn.smallerThan('lg')]: {},
  },
}))

const Home = () => {
  const { classes } = useStyles()
  //   To mange Drawer state
  const [opened, { open, close }] = useDisclosure(false)
  const [action, setAction] = useState('add')

  const handleAddBooking = () => {
    setAction('add')
    open()
  }

  const handleEditBooking = () => {
    setAction('edit')
    open()
  }

  const handleFilterBooking = () => {
    setAction('filter')
    open()
  }
  return (
    <div>
      <Drawer
        position="right"
        size="xl"
        opened={opened}
        onClose={close}
        title={
          action === 'add'
            ? 'Add Booking'
            : action === 'edit'
            ? 'Edit Booking'
            : 'Filter Booking'
        }
      ></Drawer>
      <Container className={classes.wrapper} size="100%" mt={40}>
        <Flex direction="row" justify="space-between" align="center">
          <Button
            component={Link}
            to="/booking"
            onClick={handleAddBooking}
            leftIcon={<IconPlus size="1rem" />}
            size="md"
          >
            Add Booking
          </Button>
          <ActionIcon
            onClick={handleFilterBooking}
            color="blue"
            size="lg"
            variant="light"
          >
            <IconAdjustments size="1rem" />
          </ActionIcon>
        </Flex>
      </Container>

      <Container className={classes.wrapper} size="100%" mt={40}>
        <BookingTable />
      </Container>
    </div>
  )
}

export default Home
