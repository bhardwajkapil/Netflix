
import Body from "./Components/Body";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";



function App() {
 // const initialState=useSelector((store)=>store.user.initialState)
  return (
    <div className="App">
    <Provider store={appStore}>
      <Body/>
    </Provider>
      
    
    </div>
  );
}

export default App;
