import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Paginator from './index';
import "@testing-library/jest-dom/extend-expect";

it('shows total number of results', () => {
  const noOp = () => {};
  const {getByTestId} = render(
    <Paginator
      currentPage={2}
      hitCount={500000}
      onPrevPage={noOp}
      onNextPage={noOp}
      setCurrentPage={noOp}
    />
  );
  expect(getByTestId('hitCount')).toHaveTextContent('50-75 of 500,000 results');

});

it('increments and decrements currentPage', async () => {
  const user = userEvent.setup();
  let currentPage = 0;
  const noOp = () => {};
  const onNextPage = () => currentPage += 1;
  const onPrevPage = () => currentPage -= 1;
  const { getByTestId, rerender } = render(
    <Paginator
      currentPage={currentPage}
      hitCount={500000}
      onPrevPage={onPrevPage}
      onNextPage={onNextPage}
      setCurrentPage={noOp}
    />
  );
  await user.click(getByTestId('nextPageBtn'))
  rerender(
    <Paginator
      currentPage={currentPage}
      hitCount={500000}
      onPrevPage={onPrevPage}
      onNextPage={onNextPage}
      setCurrentPage={noOp}
    />
  );
  expect(currentPage).toBe(1);
  expect(getByTestId('hitCount')).toHaveTextContent('25-50 of 500,000 results');
  await user.click(getByTestId('prevPageBtn'))
  rerender(
    <Paginator
      currentPage={currentPage}
      hitCount={500000}
      onPrevPage={onPrevPage}
      onNextPage={onNextPage}
      setCurrentPage={noOp}
    />
  );
  expect(currentPage).toBe(0);
  expect(getByTestId('hitCount')).toHaveTextContent('1-25 of 500,000 results');
});

it('can set move directly to a page', async () => {
  const user = userEvent.setup();
  let currentPage = 1;
  const noOp = () => {};
  const setCurrentPage = jest.fn();
  const { getByTestId } = render(
    <Paginator
      currentPage={currentPage}
      hitCount={500000}
      onPrevPage={noOp}
      onNextPage={noOp}
      setCurrentPage={setCurrentPage}
    />
  );
  await user.click(getByTestId('btnPage2'));
  expect(setCurrentPage).toHaveBeenCalledWith(1);

});
