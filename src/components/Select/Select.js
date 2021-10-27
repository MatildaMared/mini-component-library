import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	return (
		<Wrapper>
			<SelectElement value={value} onChange={onChange}>
				{children}
			</SelectElement>
			<PresentationalBit>
				{displayedValue}
				<IconWrapper>
					<Icon id="chevron-down" size={24} strokeWidth={1} />
				</IconWrapper>
			</PresentationalBit>
		</Wrapper>
	);
};

const SelectElement = styled.select`
	/* font-size: 1rem;
	color: ${COLORS.gray700};
	padding: 12px 52px 12px 16px;
	border: none;
	background-color: ${COLORS.transparentGray15}; */
	/* border-radius: 8px; */
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
  border-radius: 8px;
`;

const PresentationalBit = styled.div`
	font-size: 1rem;
	background-color: ${COLORS.transparentGray15};
	padding: 12px 16px;
	padding-right: 52px;
	border-radius: 8px;
	color: ${COLORS.gray700};
	display: flex;

	${SelectElement}:focus + & {
		outline: 5px auto -webkit-focus-ring-color;
    outline: 1px dotted #212121;
	}

	${SelectElement}:hover + & {
    color: ${COLORS.black};
	}
`;

const Wrapper = styled.div`
	position: relative;
	width: max-content;
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 10px;
	bottom: 0;
	margin: auto;
	width: 24px;
	height: 24px;
  pointer-events: none;
`;

export default Select;
