import { connect } from 'react-redux';

import * as actions from '../../actions';
import CompletedFilter from '../presentational/CompletedFilter';

export default connect(null, {
    showAll: actions.showAll,
    showCompleted: actions.showCompleted,
    showIncompleted: actions.showIncompleted,
})(CompletedFilter);