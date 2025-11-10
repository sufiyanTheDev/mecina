import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import RootLayout from "./app/Layout";
import Home from "./app/Page";


const App = () => {
  return (
    <RootLayout >
      {/* Your app content goes here */}
      <Home />
    </RootLayout >
  );
};

export default App;
