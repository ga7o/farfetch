import './index.scss';

import Header from '../../components/header';
import Footer from '../../components/footer';
import ProductsList from '../../components/products-list';
import BagService from '../../services/bag-service';

/**
 *  The removeItem method is used to remove a given item from the bag
 *  This method will get an item id and after a confirmation from the user
 *  Will call the BagService removeBagByIdAsync method, if the return value
 *  is true that the card element with item id will be removed, also the
 *  item is removed from the global variable and the total price of the bag
 *  is recalculated
 */
window.removeItem = (itemId) => {
    let conf = confirm('Do you want to remove the item from the bag?')

    if(conf){
        BagService.removeBagByIdAsync(bag.id, itemId)
            .then((res)=> {
                if(res) {
                    bag.items = bag.items.filter((item) => { return item.id !== itemId});
                    let element = document.getElementById(`product-${itemId}`);
                    element.remove();
                    window.calcBagTotal()
                }
                else {
                    alert('Something when wrong!');
                }
            });
    }
};

/**
 *  This method is used to recalculate the total bag price
 *  It will iterate all the existing items in the bag and will
 *  get the item price and sum it to the global variable, bagTotal
 *  When the loop end apply that value to the totalPrice html element
 */
window.calcBagTotal = () => {
    bagTotal = 0;

    if(bag.items){
        bag.items.forEach((item) => {
            bagTotal = bagTotal + parseFloat(item.price)
        });
        let element = document.getElementById("totalPrice");
        if(element){
            element.innerText = bagTotal.toFixed(2)
        }
    }
};

/**
 *  Global variables to be used in the page
 *  bag: the bag with the items
 *  bagTotal: the total price of the bag
 */
let bag;
let bagTotal = 0;

async function BagPage(bagId) {
    try {
        bag = await BagService.getBagByIdAsync(bagId);

        // After the bag is updated the total price calculation method is called
        window.calcBagTotal();

    } catch (e) {
        return '<div class="error">Error loading bag items...</div>';
    }

    // The Headed component was added
    return `<div class="page">
                ${Header(bagTotal)}  
                ${ProductsList(bag.items)}
                ${Footer()}
            </div>`;
}

export default BagPage;
