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
    margin-bottom: 10px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 75px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;

