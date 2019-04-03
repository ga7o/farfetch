import './index.scss';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ProductsList from '../../components/products-list';
import BagService from '../../services/bag-service';

async function BagPage(bagId) {
    let bag;
    let bagTotal = 0;

    try {
        bag = await BagService.getBagByIdAsync(bagId);

        // Getting the price total value
        if(bag.items){
            bag.items.forEach((item) => {
                bagTotal = bagTotal + parseFloat(item.price)
            })
        }
    } catch (e) {
        return '<div class="error">Error loading bag items...</div>';
    }

    return `<div class="page">
                ${Header(bagTotal)}
                ${ProductsList(bag.items)}
                ${Footer()}
            </div>`;
}

export default BagPage;
