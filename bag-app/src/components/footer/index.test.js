import Footer from './index';

describe('footer component', () => {
    it('it renders correctly', () => {
        expect(Footer()).toMatchSnapshot();
    });
});
