import { useNavigate } from "react-router";
import "./pages.scss";

export const InDevelopment = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className="info">
      <h6>Excuse me, but this site is a technical task so this page will never be created</h6>
      <button className="button" onClick={clickHandler}>
      Back
      </button>
    </div>
  );
};
