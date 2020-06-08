import styled,{css} from 'styled-components';

const sizeStyle = css`
    height: 380px;  
`;

const normalSIzeStyle = css`
    height: 240px;
`;

const GetSizeStyles = props => {
    
    if(props.size)
    {   
        return sizeStyle
    }

    return normalSIzeStyle;
}


export const MenuItemContainer = styled.div`
    min-width: 30%;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    cursor: pointer;

    &:first-child { 
        margin-right: 0;
    }
    
    &:last-child {
        margin-left: 0;
    }

    &:hover .background-image {
      
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)
    }

    &:hover .content{
        opacity: 0.9;
    }

    ${GetSizeStyles}

`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
`;

export const ContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color:white;
    opacity: 0.7;
    position: absolute;
`;

export const Title = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;

export const Subtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;