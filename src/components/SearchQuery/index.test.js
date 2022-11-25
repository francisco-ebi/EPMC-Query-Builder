import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SearchQuery from './index';
import "@testing-library/jest-dom/extend-expect";

it('can create a query', async () => {
  const user = userEvent.setup();
  const noOp = () => {};
  const { getByLabelText, queryByLabelText } = render(<SearchQuery onSearchResults={noOp} />);
  expect(getByLabelText('add term')).toHaveAttribute('disabled');
  expect(getByLabelText('search results')).toHaveAttribute('disabled');
  expect(queryByLabelText('boolean operator')).toBeNull();
  await user.type(getByLabelText('search term'), 'cat');
  expect(getByLabelText('add term')).not.toHaveAttribute('disabled');
  await user.click(getByLabelText('add term'));
  expect(getByLabelText('boolean operator')).toBeInTheDocument();
  await userEvent.selectOptions(getByLabelText('boolean operator'), ['AND'])
  await user.type(getByLabelText('search term'), 'feline');
  await user.click(getByLabelText('add term'));
  expect(getByLabelText('search results')).not.toHaveAttribute('disabled');
  await user.click(getByLabelText('search results'));
  expect(getByLabelText('search query').textContent).toBe('cat AND feline');

});