import { IonButton, IonButtons, IonCard, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer'; // ../../ para subcarpetas
import './Page.css';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { add } from 'ionicons/icons';

const Clientes: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

       <IonCard className='card'>
            
       <IonTitle className='titulos'>Gestion de Clientes</IonTitle>

        <IonButtons className='botones'>
        <IonButton color="primary" fill='solid' size='large'><IonIcon icon={add}/>Agregar</IonButton>
        </IonButtons>
        


      <IonGrid className='table'>
      <IonRow>
        <IonCol>Nombres</IonCol>
        <IonCol>Email</IonCol>
        <IonCol>Telefono</IonCol>
        <IonCol>Direccion</IonCol>
        <IonCol>Acciones</IonCol>
      </IonRow>

      <IonRow>
       <IonCol>Jose Rojas</IonCol>
        <IonCol>joseangel038@gmail.com</IonCol>
        <IonCol>957731400</IonCol>
        <IonCol>av wiesse</IonCol>
        <IonCol>Editar | Eliminar</IonCol>
      </IonRow>

      <IonRow>
      <IonCol>Angel Rojas</IonCol>
        <IonCol>joseangel038@gmail.com</IonCol>
        <IonCol>957731400</IonCol>
        <IonCol>av wiesse</IonCol>
        <IonCol>Editar | Eliminar</IonCol>
      </IonRow>

     
    </IonGrid>
    
    </IonCard>
    </IonContent>
    </IonPage>
  );
};

export default Clientes;