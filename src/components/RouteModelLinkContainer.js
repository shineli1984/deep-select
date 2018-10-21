import {compose, assoc, __, propEq} from 'ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ModelLink from './ModelLink'
import getMatchParamsId from '../utils/getMatchParamsId'
import findPropEqIdInDataModels from '../utils/findPropEqIdInDataModels'

export default compose(
  withRouter,
  connect((state, props) =>
    compose(
      assoc('plain', true),
      assoc('model', __, props),
      findPropEqIdInDataModels(state),
      parseInt,
      getMatchParamsId,
    )(props)
  )
)(ModelLink);