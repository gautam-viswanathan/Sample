import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonToast,
} from "@ionic/react";
import { useState } from "react";
import BioRhythm from "../components/bioRhythm";
import Navtab from "../components/Navtab";
import "./Home.css";
import giphy from "../components/giphy2.gif";
import { promises } from "fs";

interface HomeProps {
  changePosition: any;
  changeBackGround: any;
}

const Home: React.FC<HomeProps> = ({ changePosition, changeBackGround }) => {
  const [toast] = useIonToast();
  var c: number = 0;
  const [name, setName] = useState();
  const func_name = (e: any) => {
    e.prevenetDefault();
  };

  const preview = (to: any) => {
    console.log(`Ain't got time to prevent your death Mr ${name}`);
    toast({
      message: `Ain't got time to prevent your death Mr ${name}`,
      duration: 3000,
    });
  };

  return (
    <IonPage>
      <IonContent>
        <img src={changeBackGround} className="gif" />
        <IonCol>
          <IonItem lines="none" className="trans-item">
            <IonLabel position="floating">Name</IonLabel>
            <IonInput placeholder="Please specify your name" value={name} onIonChange={(event: any) => setName(event.detail.value)} />
          </IonItem>
          <IonButton class="ion-padding" color="danger" onClick={preview}>
            Click me
          </IonButton>
          <IonButton
            class="ion-padding"
            color="primary"
            onClick={() => {
              changePosition();
            }}
          >
            Let's see
          </IonButton>
          <IonButton
            class="ion-padding"
            color="secondary"
            onClick={() => {
              changeBackGround();
            }}
          >
            Surprise
          </IonButton>
          <BioRhythm />
        </IonCol>
      </IonContent>
    </IonPage>
  );
};

export default Home;
