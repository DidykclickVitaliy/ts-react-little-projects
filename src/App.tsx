import { Categories } from "./components/Categories";
import { Collection } from "./components/Collections";
import { Pagination } from "./components/Pagination";

function App() {
  return (
    <div className="App">
      <h1>My photo collection</h1>
      <Categories />
      <div className="content">
        <Collection />
      </div>
      <Pagination />
    </div>
  );
}

export default App;
