import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import AllPosts from "./Pages/AllPosts";
import Post from "./Pages/Post";
import NotFound from "./Pages/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/allpost" element={<AllPosts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
