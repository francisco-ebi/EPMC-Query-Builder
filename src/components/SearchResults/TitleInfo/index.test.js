import renderer from 'react-test-renderer';
import TitleInfo from './index';

it('it creates', () => {
  const title = "Evaluation of the microRNA transcriptome in feline whole blood";
  const component = renderer.create(
    <TitleInfo title={title}/>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});