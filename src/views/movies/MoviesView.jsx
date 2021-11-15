import styled from "styled-components"

export const MoviesView = () => {
    return (
        <div>
            <H1>NjetFlix</H1>
            <H1 isColored="blue">DependsFlix</H1>
            <H22>PurpleFLix</H22>
        </div>
    )
}

const H1 = styled.h1`
    color: ${props => props.isColored ? props.isColored : 'red'};
`

const H22 = styled.h1`
color: purple;
`