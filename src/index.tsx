import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

type Props = {};

const Root: React.FC<Props> = () => {
	return (
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
};

ReactDOM.render(<Root />, document.getElementById("root"));
