import React, {Fragment} from "react";

import InputContainer from "./container/InputContainer";
import TodoItemListContainer from "./container/TodoItemListContainer";
import SummaryContainer from "./container/SummaryContainer";
import CompletedFilterContainer from "./container/CompletedFilterContainer";

const App = () => (
    <Fragment>
        <InputContainer />
        <CompletedFilterContainer />
        <TodoItemListContainer />
        <SummaryContainer />
    </Fragment>
)

export default App
