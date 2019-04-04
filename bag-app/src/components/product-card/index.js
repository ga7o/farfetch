import './index.scss';
import closeIcon from '../../assets/remove.svg';

/**
 *  In the ProductCard I've added an id filled
 *  This filled will be used to remove the ProductCard element from the DOM
 *  when we get a successful response of the delete event
 *  Also was added the onclick event that will call the removeItem method
 *  defined in the bag/index.js file and applied to the window so it can be
 *  used within the global scope
 */
const ProductCard = item => `<div class="product-card" id="product-${item.id}">
                <div class="remove-btn" onclick="removeItem('${item.id}')">
                    <img src="${closeIcon}" />
                </div>
                <div class="image-container">
                    <img class="image" src="${item.image}" />
                </div>
                <div class="info-container alignCenter">
                    <div class="brandName">${item.name}</div>
                    <div class="price">€${item.price}</div>
                </div>
            </div>`;

export default ProductCard;
