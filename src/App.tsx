import React from "react";
import { RecoilRoot } from "recoil";
import HomePage from "./HomePage";

const App = () => {
	return (
		<RecoilRoot>
			<HomePage />
		</RecoilRoot>
	);
};

export default App;
