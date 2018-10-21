import {__, find, path} from 'ramda'

export default state =>
  find(
    __,
    path(["data", "models"], state)
  );