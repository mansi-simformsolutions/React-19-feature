import { use } from "react";

export default function UseExample() {
  const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  const User = use(fetchUser);
  return (
    <>
      <div>
        <h3 className="">Users List</h3>
        <ul>
          {User.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
