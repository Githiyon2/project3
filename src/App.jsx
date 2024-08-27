import "./App.css";
import { Header, Notes } from "./components";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-[url('https://i.ibb.co/cbHkZjQ/background.jpg')] bg-no-repeat bg-cover text-xl text-red-500">
        <Header />
        <Notes />
      </div>
    </>
  );
}

export default App;
