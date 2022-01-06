const initialState = {
  data: "Afnan",
};

export const Reducer = (state = initialState, action) => {
  if (action.type === "change") {
    return {
      data: action.value,
    };
  }
  return state;
};
