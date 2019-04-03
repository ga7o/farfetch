import './index.scss';

const Header = value => `<header class="header alignCenter">
                            <div class="title">
                                My Bag
                            </div>
                            <div class="price">
                                Total: €${value}
                            </div>                                          
                        </header>`;

export default Header;
