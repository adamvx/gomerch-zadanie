import { useRecoilState } from "recoil";
import styled from "styled-components";
import { menuOpenState } from "../recoil/atoms";

const HeaderComponent: React.FC<{ className?: string }> = ({ className }) => {
	const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);

	const onMenuClick = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className={className}>
			<button onClick={onMenuClick}>MENU</button>
		</div>
	);
};

export const Header = styled(HeaderComponent)`
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
