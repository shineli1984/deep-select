import { connect } from "react-redux";
import { __, assoc, path, compose, filter, objOf, propEq } from "ramda";
import CarModelSelect from "./CarModelSelect";
import { handleSelectModel } from "../redux/actions/search";

export default connect(
  state =>
    compose(
      assoc("selectedModel", path(["search", "model"], state)),
      objOf("models"),
      filter(__, path(['data', 'models'], state)),
      propEq('makeId'),
      parseInt,
      path(["search", "make"])
    )(state),
  { handleSelectModel }
)(CarModelSelect);
