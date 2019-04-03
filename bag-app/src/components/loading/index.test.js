import Loading from './index';

describe('loading component', () => {
    it('it renders correctly', () => {
        expect(Loading()).toMatchSnapshot();
    });
});
