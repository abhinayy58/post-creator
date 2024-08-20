
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/"><button className="border p-2 bg-red-600 text-white">Go to Home</button></Link>
    </div>
  );
}

export default NotFound;
