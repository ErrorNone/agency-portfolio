import { useNavigate } from "react-router";
import "./pages.scss";

export const NotFound404 = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className="info">
      <h6>Page not found</h6>
      <button className="button" onClick={clickHandler}>
        Back
      </button>
    </div>
  );
};
