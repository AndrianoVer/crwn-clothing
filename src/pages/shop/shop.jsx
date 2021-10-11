import React from 'react';
import { Route } from 'react-router-dom';
import CatagoryPage from '../catagory';
import CollectionsOverview from '../../component/collections-overview';
import './shop.scss';


const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
        <Route path={`${match.path}/:catagoryId`} component={CatagoryPage}></Route>
    </div>   
);

export default ShopPage;