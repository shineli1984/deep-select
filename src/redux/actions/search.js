import { compose } from 'ramda';
import { MAKE_SELECT, MODEL_SELECT } from "../constants/search";
import { createAction } from "redux-actions";
import getTargetValue from '../../utils/getTargetValue'

export const handleSelectMake = compose(
  createAction(MAKE_SELECT),
  getTargetValue,
);

export const handleSelectModel = compose(
  createAction(MODEL_SELECT),
  getTargetValue,
);
