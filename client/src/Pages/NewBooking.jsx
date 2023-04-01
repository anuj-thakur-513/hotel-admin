import { Button, Container, createStyles, Flex, rem } from '@mantine/core'
import React from 'react'
import BookingForm from '../Components/Booking/BookingForm'

const useStyles = createStyles((theme) => ({
  wrapper: {
    maxWidth: rem(400),
    width: '100%',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    direction: 'column',
    justifyContent: 'center',
  },
}))

const NewBooking = () => {
  const { classes } = useStyles()
  return (
    <Container className={classes.wrapper}>
      <BookingForm />
    </Container>
  )
}

export default NewBooking
