import React from 'react';
import CollectionsOverview from '../../component/collections-overview';
import './shop.scss';


const ShopPage = ({ collections }) => (
    <div className="shop-page">
        <CollectionsOverview />
    </div>
);

export default ShopPage;