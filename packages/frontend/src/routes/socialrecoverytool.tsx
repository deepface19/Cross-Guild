import React, { useState, useEffect } from 'react';

import {
    Flex,
    Grid,
    Text,
    Spacer,
    Button,
    Box,
    VStack,
    Center,
} from "@chakra-ui/react";
import { Card } from "../components/layout/Card";
import { CardBody } from "../components/layout/CardBody";
import { CardHeader } from '../components/layout/CardHeader';
import { AddIcon, RepeatIcon } from '@chakra-ui/icons';
import {Addguardian} from "./addguardian";
import { Link } from 'react-router-dom';
type Props = {
    handleOpenModal: any;
};


export default function Socialrecoverytool({ handleOpenModal }: Props) {
    return (
        <Flex flexDirection='column' pt={{ base: "90px", md: "10px" }}>
            <Grid
                templateColumns={{ sm: "1fr", md: "1fr 1fr", "2xl": "2fr 1.2fr 1.5fr" }}
                my='26px'
                gap='18px'>

                <Card
                    p='0px'
                    gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
                    background="#ffffff"
                    h="400px"
                    w="605px"
                    borderRadius="20px"
                    shadow='2px 8px 10px 4px rgba(0, 0, 0, 0.3)'
                    variant={''}>
                    <CardHeader variant={""}
                        mb='10'
                    >
                        <Flex direction='column'
                            mt='34px'
                            align='center'
                            justify='center'
                        >
                            <Text color='#080808' fontSize='24px' fontWeight='bold' align={'center'}>
                                Welcome to <br />
                                Cross Guild a Social Recovery Tools
                            </Text>
                        </Flex>
                    </CardHeader>
                    <Flex direction='column' justify='center' align='center'>
                        <CardBody
                            w='100%'
                            h='100%'
                            gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
                            variant={''}
                            display='flex-block'
                            justifyContent={'space-between'}
                            alignItems={'center'}

                        >
                            <VStack
                                spacing={20}
                                align='center'
                            >
                                <Button
                                    size='lg'
                                    as={Link} to='/addguardians'
                                    leftIcon={<AddIcon />}
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
                                    Add Guardians
                                </Button>
                                <Button
                                    size='lg'
                                    as={Link} to='/recovery'
                                    leftIcon={<RepeatIcon />}
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
                                    Recovery UP
                                </Button>
                            </VStack>
                        </CardBody>
                    </Flex>
                </Card>
            </Grid>
        </Flex >
    )
}