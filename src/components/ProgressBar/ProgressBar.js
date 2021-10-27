/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
	return (
		<Wrapper
			size={size}
			role="progressbar"
			aria-valuemin="0"
			aria-valuemax="100"
			aria-valuenow={value}>
			{size === "small" && <ProgressSmall value={value} />}
			{size === "medium" && <ProgressMedium value={value} />}
			{size === "large" && <ProgressLarge value={value} />}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 370px;
	background-color: ${COLORS.transparentGray15};
	border-radius: ${(props) => (props.size === "large" ? "8px" : "4px")};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	padding: ${(props) => (props.size === "large" ? "4px" : "0px")};
`;

const ProgressBase = styled.div`
	width: ${(props) => props.value + "%"};
	background-color: ${COLORS.primary};
	overflow: hidden;
	border-radius: ${(props) => (props.value == "100" ? "4px" : "4px 0 0 4px")};
`;

const ProgressSmall = styled(ProgressBase)`
	height: 8px;
`;

const ProgressMedium = styled(ProgressBase)`
	height: 12px;
`;

const ProgressLarge = styled(ProgressBase)`
	height: 16px;
`;

export default ProgressBar;
