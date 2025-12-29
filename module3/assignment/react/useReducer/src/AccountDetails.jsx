function AccountDetails({ state, dispatch }) {
  return (
    <div>
      <h3>Account Details</h3>

      <input
        placeholder="Username"
        value={state.username}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "username",
            value: e.target.value,
          })
        }
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "password",
            value: e.target.value,
          })
        }
      />
      <br /><br />

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
        Previous
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
        Next
      </button>
    </div>
  );
}

export default AccountDetails;