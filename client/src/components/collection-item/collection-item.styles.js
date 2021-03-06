import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';


export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;

    &:hover 
    {
        .image 
        {
            opacity: 0.8;
        }

        button
        {
            opacity: 0.85;
            display: flex;
        }
    }


    @media screen and (max-width : 800px) {
        width : 40vw;
        &:hover 
        {
            .image 
            {
                opacity: unset;
            }
    
            button
            {
                opacity: unset;
            }
        }
    
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;

export const AddToCartButton = styled(CustomButton)`
    display: none;
    margin-top: 255px;
    position: absolute; 

    @media screen and (max-width : 800px) {

        display : block;
        min-width : unset;
        opacity : 0.9;
        padding : 0 10px;
    }

`;


export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

`;

export const NameContainer = styled.span`
    width: 80%;
    margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
    width: 20%;
    text-align: right;

    @media screen and (max-width : 800px) {
        width: 40%;

    }
`;

