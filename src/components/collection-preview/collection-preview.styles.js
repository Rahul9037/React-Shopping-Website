import styled from 'styled-components';

export const CollectionPreviewContainer  = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const TitleContainer = styled.div`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    font-weight : bolder;

    &:hover {
        opacity : 0.8;
    }
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;