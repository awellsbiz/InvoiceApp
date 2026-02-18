import { Routes, Route } from "react-router-dom";
import Success from "./pages/Success";
import Home from "./pages/Home";

function App() {
  //function that handles submit to add a user to the supabase database that talks to the backend
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thank-you" element={<Success />} />
    </Routes>
  );
}

export default App;
