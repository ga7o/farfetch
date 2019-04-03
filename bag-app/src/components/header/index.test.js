import Header from './index';

describe('header component', () => {
    it('it renders correctly', () => {
        expect(Header()).toMatchSnapshot();
    });
});
