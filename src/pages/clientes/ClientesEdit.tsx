import { IonButton, IonButtons, IonCard, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer'; // ../../ para subcarpetas
import '../Page.css';

import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { buscarClientes, guardarCliente } from './ClientesApi';

const ClientesEdit: React.FC = () => {

  const { name, id } = useParams<{ name: string;id: string; }>();
  //const history = useHistory();
  const [cliente, setCliente] = useState<any>({});


  useEffect(() => {
    search();
  },[]);

  const search = async () => {
   /* let result = [
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
    ] */
    /*let result = buscarClientes();
    setClientes(result);*/
  }

  const save = () =>{
    guardarCliente()
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

            
       <IonTitle className='titulos'>{id === 'new' ? 'Agregar Cliente' : 'Editar cliente' }</IonTitle>

       <IonItem>
            <IonLabel position="stacked">Nombres</IonLabel>
            <IonInput onIonChange={e => cliente.nombres = e.detail.value } value={cliente.nombres}> </IonInput>
        </IonItem>  
        <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput onIonChange={e => cliente.email = e.detail.value } value={cliente.email}> </IonInput>
        </IonItem>
        <IonItem>
            <IonLabel position="stacked">Telefono</IonLabel>
            <IonInput onIonChange={e => cliente.telefono = e.detail.value } value={cliente.telefono}> </IonInput>
        </IonItem>
        <IonItem>
            <IonLabel position="stacked">Direccion</IonLabel>
            <IonInput onIonChange={e => cliente.direccion = e.detail.value } value={cliente.direccion}> </IonInput>
        </IonItem>


        <IonButtons id='boton'>
        <IonButton color="primary" fill='solid' size='large' onClick={save}><IonIcon icon={checkmark}/>Guardar</IonButton>
        </IonButtons>
    
    
    </IonCard>
    </IonContent>
    </IonPage>
  );
};

export default ClientesEdit;