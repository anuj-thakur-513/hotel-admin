import React from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Drawer, Button, Group } from '@mantine/core'

const ActionDrawer = ({ opened, close }) => {
  //   const [opened, { open, close }] = useDisclosure(false)
  return (
    <Drawer
      position="right"
      size="xl"
      opened={opened}
      onClose={close}
      title="Authentication"
    ></Drawer>
  )
}

export default ActionDrawer
