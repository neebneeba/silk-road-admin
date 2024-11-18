import { FC } from "react";

// Layout
import Layout from "@/layout";

const Home: FC = () => {
  return (
    <Layout>
      <div className="bg-red-500 flex">
        <div className="m-auto">this is Home</div>
      </div>
    </Layout>
  );
};

export default Home;
