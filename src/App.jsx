import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            {/* <Route path="/" element={<Feed />} /> */}
            <Route path="/login" element={<Login />} />
            {/* <Route path="/profile" element={<Profile />} />  */}
            {/* <Route path="/connections" element={<Connections />} /> */}
            {/* <Route path="/requests" element={<Requests />} /> */}
            {/* <Route path="/premium" element={<Premium />} /> */}
            {/* <Route path="/chat/:targetUserId" element={<Chat />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
