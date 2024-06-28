import { createContext, useState, use } from "react";

// Create a context object
const ThemeContext = createContext();

// Create a provider component
// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  // State to hold the current theme
  const [theme, setTheme] = useState("light");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Provide the theme and toggleTheme function to the children
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedCard = () => {
  // Access the theme context using the use() hook
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <div>
      <h1>Themed Card</h1>
      {/* Toggle button */}
      <button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

const Theme = () => {
  return (
    <ThemeProvider>
      <ThemedCard />
    </ThemeProvider>
  );
};

export default Theme;
