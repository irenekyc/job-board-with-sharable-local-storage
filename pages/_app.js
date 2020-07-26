import '../styles/main.css';
import { Provider } from 'react-redux'
import store from '../src/store'

export default function MyApp({ Component, pageProps }) {
    return <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
}