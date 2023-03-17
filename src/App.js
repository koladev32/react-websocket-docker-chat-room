import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat/:username" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;