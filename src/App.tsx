import Modal from  './components/modal';
import useModal from './usemodal';

export default function App() {
  const { isOpen, toggle } = useModal();
  return (
    <div className="App">
      <h1>Ejemplo Con Modal</h1>
      <button onClick={toggle}>Haga Click para Abrir el Modal </button>
      <Modal isOpen={isOpen} toggle={toggle}>
      <div>Proyecto Final React Modulo 7 Fernando Quispe Lefonzo 7057993 LP</div>
      </Modal>
    </div>
  );
}

