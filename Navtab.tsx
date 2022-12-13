import { IonIcon, IonLabel, IonNav, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { call, person, settings } from "ionicons/icons";
import { useState } from "react";
import { Redirect, Route } from "react-router";
import Home from "../pages/Home";

const Navtab: React.FC = () => {
  const [navPosition, setNavPosition] = useState<"top" | "bottom" | undefined>("bottom");
  const [backg, setBackg] = useState<"../components/giphy2.gif" | "../components/giphy.gif" | undefined>("../components/giphy2.gif");
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tab1">
          <Home
            changeBackGround={() => {
              backg === "../components/giphy2.gif" ? setBackg("../components/giphy.gif") : setBackg("../components/giphy2.gif");
            }}
            changePosition={() => {
              navPosition === "bottom" ? setNavPosition("top") : setNavPosition("bottom");
            }}
          />
        </Route>
        <Route exact path="/tab2">
          <div></div>
        </Route>
        <Route path="/tab3">
          <div></div>
        </Route>
        <Route exact path="/">
          <Redirect to="/tab1" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar className="trans-item" slot={navPosition}>
        <IonTabButton tab="tab1" href="/tab1">
          <IonLabel>Profile</IonLabel>
          <IonIcon icon={person} />
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
          <IonLabel>Contact</IonLabel>
          <IonIcon icon={call} />
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
          <IonLabel>Settings</IonLabel>
          <IonIcon icon={settings} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Navtab;
