import { h } from "https://deno.land/x/sift@0.1.7/mod.ts";
import Layout from "../components/Layout.jsx";
import SuperCenter from "../components/SuperCenter.jsx";

const Home = () => {
  return (
    <Layout>
      <SuperCenter>
        <div className="text-gray-500 font-bold">my name is Kalwabed</div>
      </SuperCenter>
    </Layout>
  );
};

export default Home;
