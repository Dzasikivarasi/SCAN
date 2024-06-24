type LoginProps = {
  classLogin: string;
  classLink: string;
  classButton: string;
};

export default function Login({
  classLogin,
  classLink,
  classButton,
}: LoginProps): JSX.Element {
  return (
    <div className={classLogin}>
      <a className={classLink} href="#">
        Зарегистрироваться
      </a>
      <button className={classButton}>Войти</button>
    </div>
  );
}
