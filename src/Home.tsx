import Hero from "./components/hero-section/Hero";
import Movies from "./components/movies/Movies";
import NewestReleases from "./components/newest-releases/NewestReleases";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <Movies />
      <NewestReleases />
    </main>
  );
};

export default Home;
