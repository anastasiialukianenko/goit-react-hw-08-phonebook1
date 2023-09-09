import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <main>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
            </Helmet>
      <Heading>Welcome</Heading>
    </main>
  );
};

 export default Home;