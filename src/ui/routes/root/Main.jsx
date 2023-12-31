import { PropTypes } from "prop-types";
const Main = ({ children }) => {
  return <main className="overflow-scroll relative">{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
