import {compose, prop, pick} from 'ramda';
import {connect} from "react-redux";
import Search from "./Search";

export default connect(compose(
  pick(['model']),
  prop('search')
))(Search)