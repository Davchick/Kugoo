import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";

const Form = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <>
      <form className="w-fit m-auto flex flex-col space-y-5">
        <h1 className="title">{isLogin ? "Вход" : "Создать аккаунт"}</h1>
        <p className="text">
          {isLogin
            ? " Рады вашему возвращению! Пожалуйста, войдите в аккаунт чтобы продолжить"
            : "Введите данные учётной записи, чтобы продолжить покупки"}
        </p>
       <FormInput label="Почта" placeholder="your@email.com"/>
       <FormInput label="Пароль" placeholder=""/>
        <button className="btn">
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </button>
        {isLogin && <Link to="/forgot">Забыл пароль</Link>}
      </form>

      <div>
        <p></p>
        <div></div>
        <p>{isLogin ? "Ещё нет аккаунта? " : "Уже есть аккаунт? "}
          <Link to={isLogin ? "/register" : "/login"}>{isLogin ? "Регистрация" : "Войти"}</Link>
        </p>
      </div>
    </>
  );
};

export default Form;
