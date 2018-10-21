import { evolve, always, assoc, identity } from "ramda";
import { MAKE_SELECT, MODEL_SELECT } from "../constants/search";
const initialState = {
  make: "",
  model: "",
};

export default (state = initialState, { type, payload }) =>
  (
    type === MAKE_SELECT &&
    evolve({
      make: always(payload),
      model: always("")
    }) ||

    type === MODEL_SELECT &&
    assoc("model", payload) ||

    identity
  )(state);
