import React from 'react';

//import './collection-overview.styles.css';
import { CollectionOverviewContainer } from './collection-overview.styles';


import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsPreview } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

const CollectionOverView = ({ collections}) => {
    return(
        <CollectionOverviewContainer>
            {collections.map(({ id, ...otherCollectionProps }) => 
                <CollectionPreview key={id} {...otherCollectionProps} /> 
            )}
        </CollectionOverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsPreview
})

export default connect(mapStateToProps)(CollectionOverView)