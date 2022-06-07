import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ShowList from "./components/ShowList"
import AddShow from "./components/AddShow";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <ShowList />
        <AddShow />
        Hello
      </div>
    </ApolloProvider>
  );
}

export default App;
