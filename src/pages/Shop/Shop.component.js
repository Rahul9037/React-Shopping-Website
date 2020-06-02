import React, { Component} from 'react';
import './Shop.styles.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionOverView from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { FetchCollectionsStartAsync } from '../../redux/shop/shop.action';
import { selectIsCollectionFetching ,  selectIsCollectionLoaded } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverViewWithSpinner = WithSpinner(CollectionOverView);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// const ShopPage = ({ match }) => {
//     return (
//         <div className='shop-page'>
//         <Route exact path={`${match.path}`} component={CollectionOverView} />
//         <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//       </div>
//     )
// }

class ShopPage extends Component{

  componentDidMount(){
    const { FetchCollections } = this.props;
    FetchCollections()
  }

  render(){
     const { match , isCollectionFetching , isCollectionLoaded } = this.props;
    return (
      <div className='shop-page'>
      <Route exact path={`${match.path}`} render={ (props) => <CollectionOverViewWithSpinner isLoading={isCollectionFetching} {...props} />  } />
      <Route path={`${match.path}/:collectionId`} render = { (props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>} />
    </div>
  )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching : selectIsCollectionFetching,
  isCollectionLoaded : selectIsCollectionLoaded,
})

const mapDispatchToProps = dispatch => ({
  FetchCollections : () => dispatch(FetchCollectionsStartAsync())
})

export default connect(mapStateToProps , mapDispatchToProps)(ShopPage);