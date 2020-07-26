import '../styles/main.css';
import { Provider } from 'react-redux'
import store from '../src/store'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

export default function MyApp({ Component, pageProps }) {
    return <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
}