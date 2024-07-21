import ReactDOM from 'react-dom/client'
import  '@styles/global.css'
import AppRoutes from '@routes/AppRoutes'
import { Provider } from 'react-redux'
import store from "@store"
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '@store/index'
ReactDOM.createRoot(document.getElementById('root')!).render(
<Provider store = {store}>
    <PersistGate loading={null} persistor={persistor}>
            <AppRoutes/>
    </PersistGate>
</Provider>


)
