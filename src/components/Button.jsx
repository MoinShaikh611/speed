import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};
  background: ${({ primary }) => (primary ? "#F26A2E" : "#077BF1")};
  white-space: nowrap;
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  outline: none;

  &:hover {
    transform: translateY(-2px);
    background: ${({ primary }) => (primary ? "#077BF1" : "#F26A2E")};
  }
`
