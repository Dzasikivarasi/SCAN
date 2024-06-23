export default function User(): JSX.Element {
  return (
    <div className="header_menu-user hidden">
      <div className="header_menu-user-name">
        <p>Алексей А.</p>
        <a href="#">Выйти</a>
      </div>
      <img
        className="header_menu-user-foto"
        src="public/img/header-empty-user.png"
        alt="Фото пользователя"
        width="32"
        height="32"
      />
    </div>
  );
}
