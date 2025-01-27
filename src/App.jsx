import Body from "./Components/Body"
import Footer from "./Components/Footer"
import appStore from "./utils/appStore"
import { Provider } from "react-redux"

function App() {
  return (
    <div className="bg-slate-950">
      <Provider store={appStore}>
        <Body />
      </Provider>

    </div>
  )
}

export default App
