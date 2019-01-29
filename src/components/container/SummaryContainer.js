import { connect } from 'react-redux';

import * as selectors from '../../selectors';
import Summary from '../presentational/Summary';

export default connect(selectors.selectTodosSummary)(Summary);