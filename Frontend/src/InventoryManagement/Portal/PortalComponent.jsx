import ReactDOM from 'react-dom';
import AddSupplier from '../SupplierManagement/AddSupplier/AddSuplier';

export default function PortalComponent({Component,togglePortal,nextComponent}) {

     const hidePortal = () => {
      nextComponent(()=> AddSupplier)
      togglePortal();
    }
   
    return ReactDOM.createPortal(
        <Component togglePortal={hidePortal} nextComponent={(Component)=> nextComponent(Component)} />,
        document.getElementById('portal-root')  
      );
}
