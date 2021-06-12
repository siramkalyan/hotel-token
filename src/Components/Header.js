/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import styled from "styled-components";
import logo from '.././logo.svg';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
function Header() {
    return (
        <div>
            <Container>
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/food-serving-31-1082162.png" height="100px" alt="hotel image"
                width="100px"    />
                <Title>
                    Chandrika Canteens
                    </Title>
                <Cart/>
            </Container>
        </div>
    )
}

export default Header;

const Container = styled.div`
min-height : 60px;
position : fixed;
display : flex;
align-items : center;
justify-content : space-between;
padding : 0 20px;
top : 0;
left : 0;
right : 0;
  
`
const Cart = styled(ShoppingCartOutlinedIcon)`
cursor : pointer;
right : 100;
padding : 20px 20px;

`
const Title = styled.div`
    padding-top : 1px ;
    font-family : 

`
