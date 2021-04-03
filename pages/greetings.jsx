import Layout from "../components/Layout.jsx";
import SuperCenter from "../components/SuperCenter.jsx";

const GreetingsPage = ({ name }) => {
  return (
    <Layout>
      <SuperCenter>
        <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500">
          Hello, {name}. Thanks for visiting us!
        </p>
      </SuperCenter>
    </Layout>
  );
};

export default GreetingsPage;
