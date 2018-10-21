import {propEq, compose} from 'ramda';
import findInDataModels from './findInDataModels';

export default state => compose(
  findInDataModels(state),
  propEq('id'),
);