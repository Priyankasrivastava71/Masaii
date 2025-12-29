

export const initialState = {
  step: 1,
  name: "",
  email: "",
  username: "",
  password: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    default:
      return state;
  }
}