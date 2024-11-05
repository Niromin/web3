import { ProviderWrapper as CounterProviderWrapper } from "../contexts/CountersContext";
import App from "./App";

const AppLoader= () => {
  return (
    <CounterProviderWrapper >
        <App />
 
      </CounterProviderWrapper >
  )
}

export default AppLoader;
