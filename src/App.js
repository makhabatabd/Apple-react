import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import Routing from "./componentsM/Routing/Routing";
import PhonesContextProvider from "./componentsM/contexts/phoneContext";
import CartContextProvider from "./componentsM/contexts/cartContext";
import FavoriteContextProvider from "./componentsM/contexts/favoriteContext";
import AuthContextProvider from "./componentsM/contexts/authContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CartContextProvider>
          <PhonesContextProvider>
            <FavoriteContextProvider>
              <Routing />
            </FavoriteContextProvider>
          </PhonesContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
