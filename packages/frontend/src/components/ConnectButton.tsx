import { Button, Box, Text } from "@chakra-ui/react";
import { formatEther } from "@ethersproject/units";
import type { BigNumber } from '@ethersproject/bignumber'
import { useAccount, useConnect, useBalance} from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
type Props = {
  handleOpenModal: any;
};


export default function ConnectButton({ handleOpenModal }: Props) {
  const { address } = useAccount()

  const { data: balanceData } = useBalance({
    addressOrName: address,
    chainId: 2828,
    formatUnits: 'gwei',
    watch: true,

  });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  return address ? (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="white" fontSize="md">
        L16
        </Text>
      </Box>
      <Button
        onClick={handleOpenModal}
        bg="gray.800"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
        {address &&
                  `${address.slice(0, 6)}...${address.slice(
                    address.length - 4,
                    address.length
                  )}`}      
        </Text>
      </Button>
    </Box>
  ) : (
    <Button
    onClick={() => connect()}
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
      Connect to UP
    </Button>
  );
    }