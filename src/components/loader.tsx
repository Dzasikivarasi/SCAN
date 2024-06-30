export default function Loader(): JSX.Element {
  return (
    <div className="loader-container">
      <img
        className="loader"
        src="/img/loader.svg"
        alt="Loading..."
        width="24"
        height="24"
      />
    </div>
  );
}
