import { connect } from "react-redux";
import { assoc, path, compose, objOf } from "ramda";
import CarMakeSelect from "./CarMakeSelect";
import { handleSelectMake } from "../redux/actions/search";

export default connect(
  state =>
    compose(
      assoc("selectedMake", path(["search", "make"], state)),
      objOf("makes"),
      path(["data", "makes"])
    )(state),
  { handleSelectMake }
)(CarMakeSelect);
