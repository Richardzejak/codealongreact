import { NavLink } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import styled from "styled-components"
import { useState } from 'react'

export const Navigation = () => {

    return (
        <div>
            <Nav>
                <NavI to="/home">Home</NavI>

                <NavI to="/movies">Movies</NavI>

                <NavI to="/DisplayDataView">Api View</NavI>
            </Nav>
        </div >
    )
}

const Nav = styled.div`
    background-color: #333;
    overflow: hidden;
`

//color: ${ props => props.isColored ? props.isColored : 'red' }; window.location.href.indexOf("franky") > -1) { #f2f2f2


const NavI = styled(NavLink)`
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &.active{
        color: orange;
    }
    :hover{
        cursor: pointer;
        background-color: #ddd;
        color: black;
    }
`

const H1 = styled.h1`
    color: ${props => props.isColored ? props.isColored : 'red'};
`


