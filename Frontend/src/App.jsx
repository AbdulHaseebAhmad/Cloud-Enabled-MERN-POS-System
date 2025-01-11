import router from './Routes/Routes';
import {RouterProvider} from 'react-router-dom';
import socket from './utilities/Socket-Connection';
import { useEffect } from 'react';
function App() {

  useEffect(()=>{
    socket.connect();
    return ()=>{
      socket.disconnect();
    }
  },[])
  return (
    <RouterProvider router={router} fallbackElement={()=>{return "Loading"}}>
    </RouterProvider>
  )
}

export default App


