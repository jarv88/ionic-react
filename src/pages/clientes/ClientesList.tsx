import { IonButton, IonButtons, IonCard, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer'; // ../../ para subcarpetas
import '../Page.css';

import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { buscarClientes } from './ClientesApi';

const Clientes: React.FC = () => {

  const { name, id } = useParams<{ name: string; id: string; }>();
  const history = useHistory();
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
    //let result = buscarClientes();
    setClientes(result);
  }
  const agregarCliente = () =>{
    history.push('/page/Clientes/new')
  }
  const editarCliente = (id:any) =>{
    history.push('/page/Clientes/'+ id)
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

       <IonCard>
            
       <IonTitle className='titulos'>Gestion de Clientes</IonTitle>

        <IonButtons className='botones'>
        <IonButton color="primary" fill='solid' size='large' onClick={agregarCliente}><IonIcon icon={add}/>Agregar</IonButton>
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
            <IonButton color="primary" fill='solid'onClick={()=> editarCliente(cliente.id)} ><IonIcon icon={pencil}/></IonButton>
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