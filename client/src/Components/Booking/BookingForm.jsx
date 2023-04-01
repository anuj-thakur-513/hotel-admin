import { Button, Flex, NumberInput, Select, TextInput } from '@mantine/core'
import { IconAt } from '@tabler/icons-react'
import React, { useEffect } from 'react'
import { DatePickerInput } from '@mantine/dates'

const BookingForm = () => {
  const [startDate, setStartDate] = React.useState(null)
  const [endDate, setEndDate] = React.useState(null)
  const [email, setEmail] = React.useState('')
  const [roomNo, setRoomNo] = React.useState('')
  const [roomType, setRoomType] = React.useState('')

  const submitForm = () => {
    console.log({ email, roomNo, roomType, startDate, endDate })
  }

  return (
    <Flex direction="column" style={{ width: '100%' }} gap="sm">
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        icon={<IconAt size="0.8rem" />}
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <NumberInput
        required
        label="Room No."
        withAsterisk
        placeholder="Your age"
        value={roomNo}
        onChange={setRoomNo}
      />
      <Select
        label="Room Type"
        placeholder="Room Type"
        withAsterisk
        required
        data={[
          { value: 'single', label: 'Single' },
          { value: 'double', label: 'Double' },
          { value: 'suite', label: 'Suite' },
        ]}
        value={roomType}
        onChange={setRoomType}
      />
      <Flex
        direction="row"
        style={{ width: '100%' }}
        justify="space-between"
        align="center"
      >
        <DatePickerInput
          style={{ margin: '0px', width: '90%', marginRight: '10px' }}
          label="Start Date"
          placeholder="Pick date"
          mx="auto"
          maw={400}
          value={startDate}
          onChange={setStartDate}
        />
        <DatePickerInput
          style={{ margin: '0px', width: '90%', marginLeft: '10px' }}
          label="End Date"
          placeholder="Pick date"
          mx="auto"
          maw={400}
          value={endDate}
          onChange={setEndDate}
        />
      </Flex>

      <Button mt="20px" variant="filled" onClick={submitForm}>
        Submit Form
      </Button>
    </Flex>
  )
}

export default BookingForm
