import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import CollectionOverView from './collection-overview.component';

import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
})

const CollectionOverViewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverView)


export default CollectionOverViewContainer;