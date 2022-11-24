const formatDate = date => {
  return new Date(date).toLocaleDateString(
    'en-GB',
    {day: "2-digit", month: "short", year: "numeric"}
  )
}

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
        {journalInfo.journal.isoabbreviation}
        {journalInfo.volume ? `, ${journalInfo.volume}` : null}
        {journalInfo.issue ? `(${journalInfo.issue})` : null}
        {pageInfo ? `:${pageInfo}` : null}
        , {formatDate(firstPublicationDate)}
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