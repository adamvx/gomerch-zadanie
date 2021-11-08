import React from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";

const App = () => {
	return (
		<Container>
			<Header />
			<Nav />
			<Main />
		</Container>
	);
};

export default App;
