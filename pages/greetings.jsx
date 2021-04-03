import { h } from "https://deno.land/x/sift@0.1.7/mod.ts";
import Layout from "../components/Layout.jsx";
import SuperCenter from "../components/SuperCenter.jsx";

const GreetingsPage = ({ name }) => {
  return (
    <Layout>
      <SuperCenter>
        <p>Hello, {name}. Thanks for visiting us!</p>
      </SuperCenter>
    </Layout>
  );
};

export default GreetingsPage;
