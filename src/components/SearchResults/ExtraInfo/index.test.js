import renderer from 'react-test-renderer';
import ExtraInfo from './index';

it('it creates', () => {
  const publication = {
    citedByCount: 11,
    id: 'id',
    pmcid: 'pmcid'
  };
  const component = renderer.create(
    <ExtraInfo publication={publication}/>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});