// blog.js

// Actions
const CREATE = "blog/CREATE";
const READ = "blog/READ";
const UPDATE = "blog/UPDATE";
const DELETE = "blog/DELETE";

const initialState = {
  card : [{writer:"aaa", text:"abc"}, {writer:"bbb", text:"def"}, {writer:"ccc", text:"ghi"}, {writer:"ddd", text:"jkl"}]
}

// Action Creators
export function createblog(card) {
  return { type: CREATE, card };
}

export function readblogs() {
  return { type: READ };
}

export function updateblog(card) {
  return { type: UPDATE, card };
}

export function deleteblog(card) {
  return { type: DELETE, card };
}

// // side effects, only as applicable
// // e.g. thunks, epics, etc = middleware
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "blog/CREATE" : {
        const new_card = [...state.card, action.card]
        return {card : new_card}
      }
      // do reducer stuff
      default:
        return state;
    }
  }
