import router from './Routes/Routes';
import {RouterProvider} from 'react-router-dom';

function App() {

  return (
    <RouterProvider router={router} fallbackElement={()=>{return "Loading"}}>
    </RouterProvider>
  )
}

export default App


