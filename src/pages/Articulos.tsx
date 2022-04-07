import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, pencil } from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Articulos: React.FC = () => {

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
            
            <IonTitle className='titulos'>Gestion de Articulos</IonTitle>
     
             <IonButtons className='botones'>
             <IonButton color="primary" fill='solid' size='large'><IonIcon icon={add}/>Agregar</IonButton>
             </IonButtons>
             
     
     
           <IonGrid className='table'>
           <IonRow>
             <IonCol>Id</IonCol>
             <IonCol>Codigo</IonCol>
             <IonCol>Descripcion</IonCol>
             <IonCol>PrecioVenta</IonCol>
             <IonCol>PrecioCosto</IonCol>
             <IonCol>Acciones</IonCol>
           </IonRow>
     
           <IonRow>
           <IonCol>1</IonCol>
             <IonCol>Art001</IonCol>
             <IonCol>Articulo de prueba 1</IonCol>
             <IonCol>10</IonCol>
             <IonCol>5</IonCol>
             <IonCol><IonButton color="primary" fill='clear'><IonIcon icon={pencil}/></IonButton></IonCol>
           </IonRow>
     
           <IonRow>
             <IonCol>2</IonCol>
             <IonCol>Art002</IonCol>
             <IonCol>Articulo de prueba 2</IonCol>
             <IonCol>3</IonCol>
             <IonCol>1</IonCol>
             <IonCol><IonButton color="primary" fill='solid'><IonIcon icon={pencil}/></IonButton></IonCol>
           </IonRow>
     
          
         </IonGrid>
         
         </IonCard>





      </IonContent>
    </IonPage>
  );
};

export default Articulos;