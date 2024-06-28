import { useState } from "react";
import { useFormStatus } from "react-dom";

export default function UseFormstatusExample() {
  const [todo, setTodo] = useState([]);

  async function submitForm(data) {
    const title = data.get("title");
    await new Promise((res) => setTimeout(res, 1000));
    setTodo((prev) => [...prev, title]);
  }

  console.log(todo);

  function SubmitButton() {
    const data = useFormStatus();
    console.log("data", data);
    return (
      <button type="submit" disabled={data.pending}>
        {data.pending ? "Submitting..." : "Submit"}
      </button>
    );
  }
  return (
    <>
      <form action={submitForm}>
        <input type="text" name="title" />
        <SubmitButton />
      </form>

      {todo && todo.map((todo, index) => <div key={index}>{todo}</div>)}
    </>
  );
}
