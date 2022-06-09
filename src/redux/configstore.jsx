import { createStore, combineReducers} from "redux"
import blog from "./modules/blog"

const rootReducer = combineReducers({blog})

const store = createStore(rootReducer)

export default store;