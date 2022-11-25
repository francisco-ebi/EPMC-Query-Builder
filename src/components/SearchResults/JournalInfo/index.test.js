import renderer from 'react-test-renderer';
import JournalInfo from './index';

it('should output journal info if publication has data', () => {
  const publication = {
    journalInfo: {
      issue: "9",
      volume: "24",
      journalIssueId: 3412000,
      dateOfPublication: "2022 Sep",
      monthOfPublication: 9,
      yearOfPublication: 2022,
      printPublicationDate: "2022-09-01",
      journal: {
          title: "Journal of feline medicine and surgery",
          medlineAbbreviation: "J Feline Med Surg",
          essn: "1532-2750",
          issn: "1098-612X",
          isoabbreviation: "J Feline Med Surg",
          nlmid: "100897329"
      }
    },
    pageInfo: "847-852",
    firstPublicationDate: "2022-09-01"
  };
  const component = renderer.create(
    <JournalInfo publication={publication}/>
  );
  const testInstance = component.root;
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(
    testInstance.findByProps({ className: "journal-info" })
    .children
    .join('')
  ).toEqual('J Feline Med Surg, 24(9):847-852, 01 Sept 2022');
});

it('should output bookOrReport details if does not have journal info', () => {
  const publication = {
    bookOrReportDetails: {
      publisher: "bioRxiv",
      yearOfPublication: 2022
    }
  };
  const component = renderer.create(
    <JournalInfo publication={publication}/>
  );
  const testInstance = component.root;
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(
    testInstance.findByProps({ className: "publisher-info" })
    .children
    .join('')
  ).toBe('bioRxiv,2022');
})