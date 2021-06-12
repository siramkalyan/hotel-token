import React from 'react'
import styled from "styled-components";
import Ima from "./background.jpg";
import FoodDisplay from "./FoodDisplay";
function Section() {
    return (
        <Container>
            <FoodDisplay />
        </Container>
    )
}

export default Section;


const Container = styled.div`

width : 100vw;
height : 100vh;
background-size : cover;
background-position : center;
background-repeat : no-repeat;
display : flex;
flex-direction : column;
justify-content : space-between; // for vetical alignment
align-items : center; // horizonatal
background-image : url(${Ima});
background : white;


`