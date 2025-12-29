function PersonalDetails({ state, dispatch }) {
  return (
    <div>
      <h3>Personal Details</h3>

      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "name",
            value: e.target.value,
          })
        }
      />
      <br /><br />

      <input
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "email",
            value: e.target.value,
          })
        }
      />
      <br /><br />

      <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
        Next
      </button>
    </div>
  );
}

export default PersonalDetails;