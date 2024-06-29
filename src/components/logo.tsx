import { Link } from "react-router-dom";
import { AppRoute } from "../constants";

type LogoProps = {
  className: string;
  url: string;
};

export default function Logo({ className, url }: LogoProps): JSX.Element {
  return (
    <div className={className}>
      <Link to={AppRoute.Main}>
        <img src={url} alt="логотип" />
      </Link>
    </div>
  );
}
