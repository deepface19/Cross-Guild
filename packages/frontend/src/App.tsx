import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import styled from 'styled-components';
import theme from "./theme";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import  Socialrecoverytool  from "./routes/socialrecoverytool";
import { Addguardian } from "./routes/addguardian";
import { Recovery } from "./routes/recovery";
function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<div className="App">
			<ChakraProvider theme={theme}>
				<Wrapper>
					<Container>
						<Router>
							<Topbar className="App-topbar">

								<Flex>
									<ConnectButton handleOpenModal={onOpen} />
									<AccountModal isOpen={isOpen} onClose={onClose} />
								</Flex>
							</Topbar>
							<Content>
								<Routes>
								<Route path="*" element={<Navigate to="/welcome" />} />
									<Route path='/welcome' element={<Socialrecoverytool handleOpenModal={undefined} />} />
									<Route path='/addguardians' element={<Addguardian />} />
									<Route path='/recovery' element={<Recovery />} />
								</Routes>
							</Content>
						</Router>
					</Container>
				</Wrapper>
			</ChakraProvider>

		</div>
	);
}
const Flex = styled.div`
	display: flex;
	align-items: center;
`;

const Topbar = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: space-between;
	height: 74px;
	width: 100%;
	img {
		max-height: 100px;
		position: space-between;
		max-width: 350px;
		size: auto;
		margin-left: 1rem;
	}
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	width: 100%;
`;

const Wrapper = styled.div`
    font-size: 1rem;
	color: white;
	min-height: 100vh;
	padding: auto;
	max-width: auto;
	margin: 0 auto;
	background: linear-gradient(-45deg, #FFB7C2, #31E0FF, #FEA888, #FDF6CD, #499CE8);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: auto;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

	`;
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
padding: 0px 24px;
max-width: 1200px;
margin: 0 auto;
`;

export default App;
