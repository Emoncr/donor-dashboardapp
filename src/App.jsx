import { useEffect, useState } from "react";
import { LoginForm } from "./components/LoginForm";
import DonorDetails from "./components/DonorDetails";

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
        <div>
          <DonorDetails />
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default App;
