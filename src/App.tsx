import React from "react";
import { Modal } from "./components/Modal";
import "./index.scss";

function App() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setIsOpen(true)}>
        ✨ Открыть окно
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
