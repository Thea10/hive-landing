import React, { useState, useContext } from "react";
import "./App.scss";
import { Route, Switch } from "react-router";
import Main from "./components/Main";
import More from "./components/More";
import { ThemeContext, ThemeProvider } from "./theme/ThemeProvider";
import SwitchTheme from "./theme/SwitchTheme";

function App(){
 


  return (
    <ThemeProvider>

      <Holder />
    
    </ThemeProvider>
  );
};

function Holder(){
  const [switched, toggleSwitch] = useState(true);
  const { bodyTheme, toggle } = useContext(ThemeContext);

  return(
    <div className={`App  text-center ${bodyTheme.background} `}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/learn-more" component={More} />
    </Switch>

    <SwitchTheme   switchTheme={toggle}
    checked={switched}
    toggleCheck={() => toggleSwitch(!switched)} />
  </div>
  )


}

export default App;
