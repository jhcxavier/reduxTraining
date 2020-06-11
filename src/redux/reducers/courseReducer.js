export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...actions.course }];
    default:
      return state;
  }
}
