import { Provider } from 'react-redux';
import store from './store/store.js';
import Modal from './components/Modal';

function App() {
  return (
    <Provider store={store}>
      <Modal/>
    </Provider>
  );
}

export default App;
