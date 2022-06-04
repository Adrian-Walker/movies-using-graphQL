import ShowList from "./components/ShowList";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});



function App() {
  return (
    <div className="App">
      <ShowList />
      Fuck
    </div>
  );
}

export default App;
