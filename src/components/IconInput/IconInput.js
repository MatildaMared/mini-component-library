import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
	return (
		<Wrapper>
			<VisuallyHidden>
				<label>{label}</label>
			</VisuallyHidden>
        <Input
          width={width}
          size={size}
          type="text"
          placeholder={placeholder}></Input>
			<IconWrapper>
				<Icon
					id={icon}
					size={size === "small" ? "14px" : "18px"}
					strokeWidth={size === "small" ? "1" : "2"}
				/>
			</IconWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`g
	position: relative;
`;

const Input = styled.input`
	font: inherit;
	font-size: ${(props) => (props.size === "small" ? "14px" : "18px")};
	margin: 0;
	font-weight: 700;
	color: ${COLORS.gray700};
	width: ${(props) => props.width + "px"};
	border: none;
	padding: ${(props) => (props.size === "small" ? "4px" : "7px")};
	padding-left: ${(props) => (props.size === "small" ? "20px" : "32px")};
	border-bottom: ${(props) =>
		props.size === "small" ? "1px solid black" : "2px solid black"};
	outline-offset: 1px;

  &:hover {
    color: ${COLORS.black};
  }

	&::placeholder {
		color: ${COLORS.gray500};
		font-weight: 400;
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 16px;
	height: 16px;
	margin: auto;
	pointer-events: none;
	color: ${COLORS.gray700};

	${Input}:hover + & {
		color: ${COLORS.black};
	}
`;

export default IconInput;
