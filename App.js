import { Provider } from "react-redux";
import Navigation from "./Navigation.js";
import { store } from "./store.js";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
