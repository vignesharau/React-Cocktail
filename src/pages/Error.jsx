import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error=useRouteError()
  if (error.status ===404) {
    return <Wrapper>
      <div>
        <img src={img} alt="Not found" />
        <h3>Ohh!</h3>
        <p>Page not found</p>
        <Link to='/'>Back home</Link>
      </div>
    </Wrapper>
  }
  return <Wrapper>
    <div>Something went wrong</div>
  </Wrapper>;
};

export default Error;
