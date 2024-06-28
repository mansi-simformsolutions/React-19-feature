import { useOptimistic, useActionState } from "react";
import { updateNameInDB } from "../api";

const Optimistic = () => {
  const [state, actionFunction, isPending] = useActionState(updateName, {
    error: null,
    name: JSON.parse(localStorage.getItem("name")) || "Anonymous user",
  });

  const [optimisticName, setOptimisticName] = useOptimistic(state.name);

  async function updateName(prevState, formData) {
    try {
      setOptimisticName(formData.get("name"));
      const newName = await updateNameInDB(formData.get("name"));
      return { name: newName, error: null };
    } catch (error) {
      return { error, name: prevState.name };
    }
  }

  return (
    <>
      <h3>UseOptimistic Example</h3>

      <p className="username">
        Current user: <span>{optimisticName}</span>
      </p>

      <form action={actionFunction}>
        <input type="text" name="name" required />
        <button type="submit">Update</button>
        {!isPending && state.error && (
          <p className="error">{state.error.message}</p>
        )}
      </form>
    </>
  );
};

export default Optimistic;
