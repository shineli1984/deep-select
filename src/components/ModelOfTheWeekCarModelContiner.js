import React from 'react'
import {compose, objOf, assoc} from "ramda";
import { connect } from "react-redux";
import CarModel from "./CarModel";
import ModelLink from './ModelOfTheWeekModelLinkContainer';
import getHomeModelId from '../utils/getHomeModelId';
import findPropEqIdInDataModels from '../utils/findPropEqIdInDataModels';

export default connect(state =>
  compose(
    assoc(
      'modelLink',
      <ModelLink />
    ),
    objOf("model"),
    findPropEqIdInDataModels(state),
    getHomeModelId,
  )(state)
)(CarModel);
