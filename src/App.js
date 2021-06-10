import './App.css';
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import {BrowserRouter, Route} from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirmation from "./pages/CodeConfirmation";
import AllowNotification from "./pages/AllowNotification";
import {Switch} from "react-router";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

function App() {
    return (
        <BrowserRouter>
            <Route exat path={["/", "/invite", "code_confirm", "allow_notification"]}>

                <PlanLayout>
                    <Switch>
                        <Route exact path="/" component={Welcome}></Route>
                        <Route exact path="/invite" component={PhoneConfirmation}/>
                        <Route exact path="/code_confirm" component={CodeConfirmation}/>
                        <Route exact path="/allow_notification" component={AllowNotification}/>
                    </Switch>
                </PlanLayout>
            </Route>
            <Route exat path={["/home", "/explore", "/profile"]}>
                <AppLayout>
                    <Switch>
                        <Route exact path="/home" component={() => <Home/>}/>
                        <Route exact path="/explore" component={() => <Explore/>}/>
                        <Route exact path="/profile" component={() => <Profile/>}/>
                    </Switch>
                </AppLayout>
            </Route>
        </BrowserRouter>

    );
}

export default App;
