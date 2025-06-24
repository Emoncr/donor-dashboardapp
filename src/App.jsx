import { useEffect, useState } from "react";
import { LoginForm } from "./components/LoginForm";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("donorEmail")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  return (
    <>
      {isAuthenticated ? (
        <div className="welcome-message">
          <h1>Welcome back to SquareDonations!</h1>
          <p>
            Your donations are making a difference.{" "}
            {localStorage.getItem("donorEmail")}
          </p>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default App;
