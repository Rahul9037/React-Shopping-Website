import React, { Component } from 'react';
import './Shop.styles.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { FetchCollectionsStart } from '../../redux/shop/shop.action';

import CollectionOverViewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

// const ShopPage = ({ match }) => {
//     return (
//         <div className='shop-page'>
//         <Route exact path={`${match.path}`} component={CollectionOverView} />
//         <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//       </div>
//     )
// }

class ShopPage extends Component {

  componentDidMount() {
    const { FetchCollections } = this.props;
    FetchCollections()
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact
          path={`${match.path}`}
          component = {CollectionOverViewContainer} />
        <Route
          path={`${match.path}/:collectionId`}
          component= { CollectionPageContainer} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  FetchCollections: () => dispatch(FetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);