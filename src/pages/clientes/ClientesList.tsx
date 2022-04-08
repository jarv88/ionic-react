import { IonButton, IonButtons, IonCard, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer'; // ../../ para subcarpetas
import '../Page.css';

import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';

const Clientes: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const [clientes, setClientes] = useState<any>([]);


  useEffect(() => {
    search();
  },[]);

  const search = async () => {
    let result = [
        {
            id:'1',
            nombres:'Jose Angel Rojas',
            email:'joseangel038@gmail.com',
            telefono:'957731400',
            direccion:'av wiesse, SJL'
        },
        {
            id:'2',
            nombres:'Angel Rojas Valerio',
            email:'joseangel038@gmail.com',
            telefono:'957731400',
            direccion:'av wiesse, SJL'
        }
    ]
    setClientes(result);
  }


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
      
      {clientes.map((cliente:any) =>
          <IonRow>
          <IonCol>{cliente.nombres}</IonCol>
           <IonCol>{cliente.email}</IonCol>
           <IonCol>{cliente.telefono}</IonCol>
           <IonCol>{cliente.direccion}</IonCol>
           <IonCol>
            <IonButton color="primary" fill='solid'><IonIcon icon={pencil}/></IonButton>
            <IonButton color="danger" fill='solid'><IonIcon icon={close}/></IonButton>
   
           </IonCol>
         </IonRow>
      )}
      

     
    </IonGrid>
    
    </IonCard>
    </IonContent>
    </IonPage>
  );
};

export default Clientes;