import { useNavigate } from "react-router-dom";

//I want to insert a variable for the backend URL that calls my deployed backend and locally too
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
//this is the home page of the application

function Home() {
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    try {
      const response = await fetch(`${apiUrl}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to add user");
      } else {
        navigate("/thank-you");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Hello World from the frontend</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button
          //use basic tailwindcss to style the button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          type="submit"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default Home;
