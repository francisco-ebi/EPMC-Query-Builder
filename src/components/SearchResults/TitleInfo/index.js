export default function TitleInfo({ title }) {
  return (
    <p
      className="title"
      dangerouslySetInnerHTML={{__html: title}}
    >
    </p>
  );
}