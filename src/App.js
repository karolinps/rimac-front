import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import SingIn from "@pages/SingIn";
import Thanks from "@pages/Thanks";
import ArmYourPlan from "@pages/ArmYourPlan";
import PublicRoute from "@utils/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" exact component={SingIn} />
        <PublicRoute path="/" exact component={SingIn} />
        <PublicRoute path="/your-plan" exact component={ArmYourPlan} />
        <PublicRoute path="/thanks" exact component={Thanks} />{" "}
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
