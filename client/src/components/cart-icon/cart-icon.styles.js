import styled from 'styled-components';

import { ReactComponent as ShoppingIcon } from '../assets/bag.svg';

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
    height: 30px;
    width: 30px;
`;

export const ItemCountContainer= styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 15px;
`;