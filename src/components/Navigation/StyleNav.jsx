import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 2px;
  &.active,
  &.hover,
  &.focus {
    border: 1px solid;
    border-radius: 2px;
  }
`;

export const toolbarStyle = {
    display: 'flex',
    columnGap: 3,
};