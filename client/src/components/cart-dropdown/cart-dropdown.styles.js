import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';


export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color: white;
    top: 100px;
    right: 60px;
    padding: 20px;
    z-index: 5;
`;

export const CartItemsContainer= styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const EmptyCartContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartDropdownButton = styled(CustomButton)`
    margin-top :auto;
`;

