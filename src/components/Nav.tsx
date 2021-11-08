import styled, { css } from "styled-components";

type Props = {
	open: boolean;
};

export const Nav = styled.nav<Props>`
	position: absolute;
	top: 64px;
	left: 0px;
	bottom: 0px;
	width: 200px;
	transition: transform 300ms ease-in-out 0s;
	background-color: yellow;
	${(props) =>
		css`
			transform: translateX(${props.open ? "0%" : "-100%"});
		`}
`;
