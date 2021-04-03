import { h } from "https://deno.land/x/sift@0.1.7/mod.ts";
import Layout from "../components/Layout.jsx";
import SuperCenter from "../components/SuperCenter.jsx";

const Home = () => {
  return (
    <Layout>
      <SuperCenter>
        <div className="flex flex-col space-y-3">
          <p className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-gray-500">
            Hello, I'm Kalwabed. Welcome to another power of{" "}
            <a
              href="http://deno.land"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline transition"
            >
              Deno
            </a>
          </p>
          <div className="text-gray-600 font-light tracking-wide text-center">
            Go to{" "}
            <a
              href="https://kawari.space"
              className="transition hover:no-underline underline hover:text-blue-500 focus:outline-none"
            >
              kawari.space
            </a>
          </div>
        </div>
      </SuperCenter>
    </Layout>
  );
};

export default Home;
