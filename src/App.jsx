import Demo from "./Component/UseTransition";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Form from "./Component/UseAction";
import Optimistic from "./Component/Optimistic";
import { Suspense } from "react";
// import UseExample from "./Component/UseExample";
import UseFormstatusExample from "./Component/UseFormStatusExample";
import Posts from "./Component/UseExample";
// import Theme from "./Component/UseContext";

const App = () => {
  const LoadingFallback = () => <p>Loading...</p>;
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/use-transition">Use Transition</Link>
            </li>
            <li>
              <Link to="/use-action">useActionState</Link>
            </li>
            <li>
              <Link to="/use-form-status-example">UseFormStatus example</Link>
            </li>
            <li>
              <Link to="/use-optimistic">Use Optimistic</Link>
            </li>
            <li>
              <Link to="/use-example">Use</Link>
            </li>

            <li>
              <Link to="/use-context">Use with context example</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/use-action" element={<Form />} />
          <Route path="/use-optimistic" element={<Optimistic />} />
          <Route
            path="/use-example"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <Posts />
              </Suspense>
            }
          />
          <Route path="/use-transition" element={<Demo />} />
          <Route
            path="/use-form-status-example"
            element={<UseFormstatusExample />}
          />
          {/* <Route path="/use-context" element={<Theme />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
