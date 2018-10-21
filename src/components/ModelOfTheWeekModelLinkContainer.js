import { compose, assoc, __ } from 'ramda';
import { connect } from 'react-redux';
import ModelLink from './ModelLink'
import getHomeModelId from '../utils/getHomeModelId'
import findPropEqIdInDataModels from '../utils/findPropEqIdInDataModels'

export default compose(
  connect((state, props) =>
    compose(
      assoc('model', __, props),
      findPropEqIdInDataModels(state),
      getHomeModelId,
    )(state)
  )
)(ModelLink);