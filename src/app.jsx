import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import FeaturedArticles from "./components/FeaturedArticles";
import SearchBox from "./components/SearchBox";
import QuickRead from "./components/QuickRead";
import OldPost from "./components/OlderPost";
import PopularTags from "./components/PopularTags";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Post from "./pages/Post";
import SwiperComponent from "./components/SwiperComponent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OlderPost from "./components/OlderPost";
import Blogs from "./pages/Blogs";
import ForgetPassword from "./pages/ForgetPassword";
import Compose from "./pages/Compose";
import Blog from "./pages/Blog";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={[
            <FeaturedArticles />,
            <SwiperComponent />,
            <OldPost />,
            <PopularTags />,
            <Newsletter />,
          ]}
        />
        <Route exact path="/categories" element={[<PopularTags />]} />
        <Route exact path="/compose" element={[<Compose />]} />
        <Route exact path="/blogs" element={[<Blogs />]} />
        <Route exact path="/login" element={[<Login />]} />
        <Route exact path="/forgetpass" element={[<ForgetPassword />]} />
        <Route exact path="/register" element={[<Register />]} />
        <Route exact path="/search" element={[<SearchBox />]} />

        <Route exact path="/blog/:id" element={[<Post />]} />
      </Routes>
      <Footer />
    </>
  );
}
