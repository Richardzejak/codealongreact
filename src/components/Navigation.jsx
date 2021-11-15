import { useNavigate } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import styled from "styled-components"

export const Navigation = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Nav>
                <NavI onClick={() => navigate(RoutingPath.homeView)}>Home</NavI>
                <NavI onClick={() => navigate(RoutingPath.moviesView)}>Movies</NavI>
            </Nav>
        </div>
    )
}

const Nav = styled.div`
    background-color: #333;
    overflow: hidden;
`

//color: ${ props => props.isColored ? props.isColored : 'red' };

const NavI = styled.a`
  float: left;
  color:#f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

    :hover{
        cursor: pointer;
        background-color: #ddd;
        color: black;
    }

`

const H1 = styled.h1`
    color: ${props => props.isColored ? props.isColored : 'red'};
`


