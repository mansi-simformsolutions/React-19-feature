import { useState } from "react";
// import { useTransition } from "react";
import PostTabs from "./PostsTab";

const Demo = () => {
  const [tab, setTab] = useState("home");
  // const [isPending, startTransition] = useTransition();

  // function switchTab(tab) {
  //   startTransition(() => {
  //     setTab(tab);
  //   });
  // }

  function switchTab(tab) {
    setTab(tab);
  }

  function setStyles(thisTab) {
    return {
      backgroundColor: tab === thisTab ? "#262626" : "white",
      color: tab === thisTab ? "white" : "black",
    };
  }

  return (
    <main>
      <nav>
        <button onClick={() => switchTab("home")} style={setStyles("home")}>
          Home
        </button>
        <button
          onClick={() => switchTab("products")}
          style={setStyles("products")}
        >
          Products
        </button>
        <button onClick={() => switchTab("about")} style={setStyles("about")}>
          About
        </button>
      </nav>
      <div>
        {/* {isPending && <p>Loading...</p>}
        {!isPending && tab === "home" && <h1>Home page</h1>}
        {!isPending && tab === "products" && <PostTabs />}
        {!isPending && tab === "about" && <h1>About page</h1>} */}
        {tab === "home" && <h1>Home page</h1>}
        {tab === "products" && <PostTabs />}
        {tab === "about" && <h1>About page</h1>}
      </div>
    </main>
  );
};

export default Demo;
