import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
//import './collection-preview.styles.css';
import { CollectionPreviewContainer , PreviewContainer , TitleContainer } from './collection-preview.styles';

import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items , match , routeName , history}) => {
   
    return (
        <CollectionPreviewContainer>
            <TitleContainer onClick={ () => history.push(`${match.url}/${routeName}`) } >{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
                {items.filter((item, index) => index < 4)
                    .map((item) =>
                        
                            <CollectionItem key={item.id} item={item}/>
                        )}
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}


export default withRouter(CollectionPreview);
