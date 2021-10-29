import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import SingIn from "@pages/SingIn";
import Thanks from "@pages/Thanks";
import ArmYourPlan from "@pages/ArmYourPlan";
import PublicRoute from "@utils/PublicRoute";
import ProtectedRoute from "@utils/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" exact component={SingIn} />
        <PublicRoute path="/" exact component={SingIn} />
        <ProtectedRoute path="/your-plan" exact component={ArmYourPlan} />
        <ProtectedRoute path="/thanks" exact component={Thanks} />{" "}
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
