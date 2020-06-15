import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    @media screen and (max-width : 800px) {
        height : 60px;
        padding :10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 75px;
    padding-top : 25px;

    @media screen and (max-width : 800px) {
        width : 50px;
        padding : 0px;
    }
`;

export const OptionsContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    
    @media screen and (max-width : 800px) {
        width : 80%;
    }
}
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;

