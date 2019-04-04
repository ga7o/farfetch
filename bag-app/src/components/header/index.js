import './index.scss';

/**
 * Header defines the html literal template for the header
 * I've used the value within a span element with the totalPrice id
 * this way it can be updated via DOM
 * @param value is the bag total price value
 * @returns {string} The header section html literal string
 */

const Header = value => `<header class="header alignCenter">
                            <div class="title">
                                My Bag
                            </div>
                            <div class="price">
                                Total: €<span id="totalPrice">${value}</span>
                            </div>                                          
                        </header>`;

export default Header;
