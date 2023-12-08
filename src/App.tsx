import { RouterProvider } from "react-router-dom";
import { Mainrouter } from "./router/Mainrouter";
import { Provider } from "react-redux";
import { store } from "./global/Store"

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={Mainrouter} />
      </Provider>
    </div>
  );
};

export default App;
