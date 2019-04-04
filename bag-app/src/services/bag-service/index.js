import axios from 'axios';

const client = axios.create();

export const BagServiceUrls = {
    base() {
        return 'http://localhost:3000/bag/';
    },
    getBagUrl(id) {
        return `${this.base()}${id}`;
    },
    getBagItemUrl(id, itemId) {
        return `${this.base()}${id}/items/${itemId}`;
    },

    removeBagItemUrl(id, itemId) {
        return `${this.base()}${id}/items/${itemId}`;
    },
};

const BagService = {

    async getBagByIdAsync(bagId) {
        return client.get(BagServiceUrls.getBagUrl(bagId))
            .then(res => res.data[0]);
    },


    // Removes a bag in the server side
    // since the api just returns 200 if the item was removed or
    // other status if something went wrong
    // This method will return true or false depending the api response
    async removeBagByIdAsync(bagId, itemId) {
        return client.delete(BagServiceUrls.removeBagItemUrl(bagId, itemId))
            .then(res => {
                if(res.status === 200) {
                    return true
                }
                return false
            })
            .catch(err => {
                console.log(err);
                return false
            });
    },

};

export default BagService;
