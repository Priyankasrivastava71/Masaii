import Home from "./Home";
import Login from "./Login";
import Todos from "./Todos";
import TodoDetails from "./TodoDetails";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ProtectRoute from "./ProtectRoute";

function App() {
  return (
    <>
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          

          {/* Protected Route */}
          <Route path="/todos" element={
              <ProtectRoute>
                <Todos/>
              </ProtectRoute>
            }
          />
          <Route path="/todo/:id" element={
            <ProtectRoute>
            <TodoDetails/>
            </ProtectRoute>
          }></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
