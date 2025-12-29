// components/ReviewAndSubmit.jsx

function ReviewAndSubmit({ state, dispatch, onSubmit }) {
  return (
    <div>
      <h3>Review & Submit</h3>

      <p><b>Name:</b> {state.name}</p>
      <p><b>Email:</b> {state.email}</p>
      <p><b>Username:</b> {state.username}</p>

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
        Previous
      </button>
      &nbsp;
      <button onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default ReviewAndSubmit;