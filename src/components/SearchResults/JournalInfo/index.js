export default function JournalInfo({
  publication: {
    journalInfo,
    pageInfo,
    firstPublicationDate,
    bookOrReportDetails
  }
}) {
  if (journalInfo) {
    return (
      <p className="journal-info">
        {journalInfo.journal.isoabbreviation},
        {journalInfo.volume}({journalInfo.issue}):
        {pageInfo}, {firstPublicationDate}
      </p>
    );
  } else {
    return (
      <p className="publisher-info">
        {bookOrReportDetails.publisher},
        {bookOrReportDetails.yearOfPublication}
      </p>
    );
  }

}