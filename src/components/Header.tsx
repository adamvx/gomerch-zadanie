import styled from "styled-components";

export const HeaderS = styled.nav`
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	height: 64px;
	background-color: aqua;
	padding: 0px 16px;
	display: flex;
	-webkit-box-pack: start;
	justify-content: flex-start;
	-webkit-box-align: center;
	align-items: center;
`;

export const Header: React.FC<{}> = () => {
	return (
		<HeaderS>
			<button>MENU</button>
		</HeaderS>
	);
};
