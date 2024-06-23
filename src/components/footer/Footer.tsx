import Logo from "../header/Logo";

export function Footer() {
  return (
    <footer className="footer">
      <Logo className="footer_logo" url="public/img/header-logo-white.svg" />
      <div className="footer_info">
        <div className="footer_info-contacts">
          <p>г. Москва, Цветной б-р, 40</p>
          <p>+7 495 771 21 11</p>
          <p>info@skan.ru</p>
        </div>
        <p className="footer_info-copyright">Copyright. 2022</p>
      </div>
    </footer>
  );
}
