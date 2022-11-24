export default function ExtraInfo({
  publication: {
    citedByCount,
    id,
    pmcid
  }
}) {
  return  (
    <p className="extra-info">
      Cited by: {citedByCount} articles |
      PMID: {id} |
      PMCID: {pmcid ? pmcid : 'N/A'}
    </p>
  );
}