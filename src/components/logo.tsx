type LogoProps = {
  className: string;
  url: string;
};

export default function Logo({ className, url }: LogoProps): JSX.Element {
  return (
    <div className={className}>
      <a href="#">
        <img src={url} alt="логотип" />
      </a>
    </div>
  );
}
