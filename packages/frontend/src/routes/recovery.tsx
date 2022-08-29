import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Flex,
  Grid,
  Text,
  Spacer,
  Button,
  Box,
  VStack,
  Center,
  IconButton,
  Input,
  FormControl,
  InputLeftAddon,
  InputGroup,
  Tabs, TabList, TabPanels, Tab, TabPanel, FormLabel,
} from "@chakra-ui/react";
import { Card } from "../components/layout/Card";
import { CardBody } from "../components/layout/CardBody";
import { CardHeader } from '../components/layout/CardHeader';

type Props = {
  handleOpenModal: any;
};

export const Recovery = (props: any): React.ReactElement => {
  const [recoveryAddress, setRecoveryAddress] = useState('')
  const [recipientData, setRecipientData] = useState('')
  const [guardian, setGuardian] = useState('')
  const [guardian2, setGuardian2] = useState('')
  const [guardian3, setGuardian3] = useState('')
  const [guardian4, setGuardian4] = useState('')
  const [guardian5, setGuardian5] = useState('')

  return (
    <Flex flexDirection='column' pt={{ base: "90px", md: "10px" }}>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", "2xl": "2fr 1.2fr 1.5fr" }}
        mb='20px'
      >

        <Card
          p='0px'
          gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
          background="#ffffff"
          h="500px"
          w="705px"
          borderRadius="20px"
          shadow='2px 8px 10px 4px rgba(0, 0, 0, 0.3)'
          variant={''}>
          <Tabs isFitted variant='enclosed' size='lg'>
            <CardHeader
              variant={""}
              mb='10'
            >
              <TabList mb='1em' color='black'>
                <Tab _selected={{ color: "white", bgGradient: 'linear(to-r, rgb(255,186,197), blue.500)' }}>Recovery</Tab>
                <Tab _selected={{ color: "white", bgGradient: 'linear(to-r, rgb(255,186,197), blue.500)' }}>Setup Guardians</Tab>
              </TabList>
            </CardHeader>
            <TabPanels>
              <TabPanel>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  minH="280px">
                  <VStack
                    spacing={5}
                    align='center'
                  >
                    <FormControl as='fieldset' >
                    <FormLabel htmlFor='Input Universal Profile Address to Recover' color={'black'}>Input Universal Profile Address to Recover</FormLabel>
                      <InputGroup>
                        <Input
                          value={recoveryAddress}
                          onChange={e => setRecoveryAddress(e.target.value)}
                          htmlSize={45}
                          width='auto'
                          variant='filled'
                          placeholder='Address' />
                      </InputGroup>
                    </FormControl>
                    <Button
                      size='lg'
                      bg="rgb(73,146,218)"
                      color="white"
                      fontSize="lg"
                      fontWeight="medium"
                      borderRadius="xl"
                      border="1px solid transparent"
                      _hover={{
                        borderColor: "blue.700",
                        color: "white",
                        bgGradient: 'linear(to-r, rgb(255,186,197), blue.500)',
                      }}
                      _active={{
                        backgroundColor: "rgb(73,146,218)",
                        borderColor: "rgb(73,146,218)",
                      }}
                    >
                      Confirm
                    </Button>
                  </VStack>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  minH="280px">
                  <VStack
                    spacing={5}
                    align='center'
                  >
                    <FormControl as='fieldset' >
                      <InputGroup>
                        <InputLeftAddon children='#1 Guardian' color="black" />
                        <Input
                          value={guardian}
                          onChange={e => setGuardian(e.target.value)}
                          htmlSize={45}
                          width='auto'
                          variant='filled'
                          placeholder='Address' />
                      </InputGroup>
                    </FormControl>
                    <FormControl as='fieldset' >
                      <InputGroup>
                        <InputLeftAddon children='#2 Guardian' color="black" />
                        <Input
                          value={guardian2}
                          onChange={e => setGuardian2(e.target.value)}
                          htmlSize={45}
                          width='auto'
                          variant='filled'
                          placeholder='Address' />
                      </InputGroup>
                    </FormControl>
                    <FormControl as='fieldset' >
                      <InputGroup>
                        <InputLeftAddon children='#3 Guardian' color="black" />
                        <Input
                          value={guardian3}
                          onChange={e => setGuardian3(e.target.value)}
                          htmlSize={45}
                          width='auto'
                          variant='filled'
                          placeholder='Address' />
                      </InputGroup>
                    </FormControl>
                    <FormControl as='fieldset' >
                      <InputGroup>
                        <InputLeftAddon children='#4 Guardian' color="black" />
                        <Input
                          value={guardian4}
                          onChange={e => setGuardian4(e.target.value)}
                          htmlSize={45}
                          width='auto'
                          variant='filled'
                          placeholder='Address' />
                      </InputGroup>
                    </FormControl>
                    <FormControl as='fieldset' >
                      <InputGroup>
                        <InputLeftAddon children='#5 Guardian' color="black" />
                        <Input
                          value={guardian5}
                          onChange={e => setGuardian5(e.target.value)}
                          htmlSize={45}
                          width='auto'
                          variant='filled'
                          placeholder='Address' />
                      </InputGroup>
                    </FormControl>

                    <Button
                      size='lg'
                      bg="rgb(73,146,218)"
                      color="white"
                      fontSize="lg"
                      fontWeight="medium"
                      borderRadius="xl"
                      border="1px solid transparent"
                      _hover={{
                        borderColor: "blue.700",
                        color: "white",
                        bgGradient: 'linear(to-r, rgb(255,186,197), blue.500)',
                      }}
                      _active={{
                        backgroundColor: "rgb(73,146,218)",
                        borderColor: "rgb(73,146,218)",
                      }}
                    >
                      Confirm
                    </Button>
                  </VStack>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </Grid>
    </Flex >
  )
}