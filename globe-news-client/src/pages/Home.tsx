import Footer from "../components/Footer/footer";
import PostForm from "../components/Form/PostForm";
import Header from "../components/header";
import MoreNews from "../components/MoreNews";
import TopNews from "../components/TopNew";

const Home = () => {
  return (
    <>
      <Header />
      <TopNews />
      <hr />
      <MoreNews/>
      <hr />
      <PostForm />
      <Footer />
    </>
  )
}

export default Home