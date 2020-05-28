import React from 'react';

import './collection-overview.styles.css';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsPreview } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

const CollectionOverView = ({ collections }) => {
    console.log(collections)
    return(
        <div className="collection-overview">
            {collections.map(({ id, ...otherCollectionProps }) =>
                <CollectionPreview key={id} {...otherCollectionProps} />
            )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsPreview
})

export default connect(mapStateToProps)(CollectionOverView)