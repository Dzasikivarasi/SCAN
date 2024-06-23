type LoginType = {
  classLogin: string;
  classLink: string;
  classButton: string;
};

export default function Login({
  classLogin,
  classLink,
  classButton,
}: LoginType): JSX.Element {
  return (
    <div className={classLogin}>
      <a className={classLink} href="#">
        Зарегистрироваться
      </a>
      <button className={classButton}>Войти</button>
    </div>
  );
}
