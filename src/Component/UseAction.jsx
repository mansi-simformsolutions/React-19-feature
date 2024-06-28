import { useActionState } from "react";
import { updateNameInDB } from "../api";

const Form = () => {
  const [state, actionFunction, isPending] = useActionState(updateName, {
    error: null,
    name: JSON.parse(localStorage.getItem("name")) || "Anonymous user",
    // lname: "",
  });

  async function updateName(prevState, formData) {
    // console.log("formData", formData.entries());
    // for (const pair of formData.entries()) {
    //   console.log(pair);
    // }
    try {
      const newName = await updateNameInDB(formData.get("name"));
      return { name: newName, error: null };
    } catch (error) {
      return { error, name: prevState.name };
    }
  }

  return (
    <>
      <h3>UseActionState Example</h3>

      <p className="username">
        Current user: <span>{state.name}</span>
      </p>

      {/* <p className="lastName">
        Current lane: <span>{state.lname}</span>
      </p> */}

      {isPending && <p>Loading...</p>}

      <form action={actionFunction}>
        <input type="text" name="name" required />
        {/* <input type="text" name="lname" required /> */}
        <button type="submit">Update</button>
        {!isPending && state.error && (
          <p className="error">{state.error.message}</p>
        )}
      </form>
    </>
  );
};

export default Form;
