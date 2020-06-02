import React, { Component} from 'react';
import './Shop.styles.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionOverView from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore,ConvertCollectionsToMap } from '../../firebase/firebase.utils';
import { UpdateCollection } from '../../redux/shop/shop.action';

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

  state = {
    loading : true
  }

  unSubscribeFromSnapshot = null;

  componentDidMount(){
    const { UpdateCollection } = this.props
    const collectionRef = firestore.collection('collections')
    
    collectionRef.onSnapshot( async snapShot => {

      const collectionMap = ConvertCollectionsToMap(snapShot)
      UpdateCollection(collectionMap)
      this.setState({ loading : false})
    })

  }

  render(){
     const { match } = this.props;
     const { loading } = this.state;
    return (
      <div className='shop-page'>
      {/* <Route exact path={`${match.path}`} component={CollectionOverView} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
      <Route exact path={`${match.path}`} render={ (props) => <CollectionOverViewWithSpinner isLoading={loading} {...props} />  } />
      <Route path={`${match.path}/:collectionId`} render = { (props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
    </div>
  )
  }
}

const mapDispatchToProps = Dispatch => ({
  UpdateCollection : collectionMap => Dispatch(UpdateCollection(collectionMap))
})

export default connect(null , mapDispatchToProps)(ShopPage);