import renderer from 'react-test-renderer';
import AuthorInfo from './index';

it('it creates', () => {
  const component = renderer.create(
    <AuthorInfo author="Joe"/>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});