import { prop, pick, compose } from "ramda";
import { connect } from "react-redux";
import Review from "./Review";

export default connect(
  compose(
    pick(["review"]),
    prop("home")
  )
)(Review);
