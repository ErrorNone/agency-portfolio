import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import "./pages.scss";

export const Contacts = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className="info">
      <h6>The application is designed as a test task</h6>
      <ul className="info__list">
        <li>
          <span>Links:</span>
        </li>
        <li>
          <a href="https://github.com/ErrorNone" target="blank">
            <span>Github:</span> https://github.com/ErrorNone
          </a>
        </li>
        <li>
          <a href="https://web.telegram.org/k/#@Stive_Voznick" target="blank">
            <span>Telegram:</span> @Stive_Voznick
          </a>
        </li>
        <li>
          <a href="mailto:igor.homechko@gmail.com">
            <span> E-mail:</span> igor.homechko@gmail.com
          </a>
        </li>
      </ul>
      <button className="button" onClick={clickHandler}>
        Back
      </button>
    </div>
  );
};
