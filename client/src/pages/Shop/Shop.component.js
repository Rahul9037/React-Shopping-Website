import React, { useEffect , lazy ,Suspense} from 'react';
import './Shop.styles.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { FetchCollectionsStart } from '../../redux/shop/shop.action';
import Spinner from '../../components/spinner/spinner.component';

const CollectionOverViewContainer  = lazy( () => import('../../components/collection-overview/collection-overview.container'));
const CollectionPageContainer = lazy( () => import('../collection/collection.container'));

// const ShopPage = ({ match }) => {
//     return (
//         <div className='shop-page'>
//         <Route exact path={`${match.path}`} component={CollectionOverView} />
//         <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//       </div>
//     )
// }

const ShopPage = ({ match ,FetchCollections}) => {

  useEffect( () => {
    FetchCollections()
  } , [FetchCollections])

  return (
    <div className='shop-page'>
      <Suspense fallback={ Spinner}>
      <Route exact
        path={`${match.path}`}
        component={CollectionOverViewContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer} />
      </Suspense>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  FetchCollections: () => dispatch(FetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);