import styled from 'styled-components';

export const CartItemContainer = styled.div`
    height:80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 5px;
    margin-bottom: 15px;
    justify-content: space-between;
`;

export const ImageContainer = styled.div`
    height: 80px;
    width: 30%;
    background-size: cover;
    background-position: center;
`;

export const QuantityContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`;