import React from "react";
import { useRecoilValue } from "recoil";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";
import { menuOpenState } from "./recoil/atoms";

type Props = {};

const HomePage: React.FC<Props> = () => {
	const menuOpen = useRecoilValue(menuOpenState);

	return (
		<Container>
			<Header />
			<Nav open={menuOpen}>{menuOpen ? "on" : "off"}</Nav>
			<Main>{menuOpen ? "on" : "off"}</Main>
		</Container>
	);
};
export default HomePage;
