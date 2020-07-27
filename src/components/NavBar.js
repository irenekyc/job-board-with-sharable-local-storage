
import SearchBar from './SearchBar';
import { useDispatch } from 'react-redux';
import { open_user_area } from '../store/actions/user'

const NavBar = () => {
    const dispatch = useDispatch()
    return <nav>
        <span className="main-logo"> Jobify</span>
        <SearchBar />
        <div className="user-area" onClick={() => dispatch(open_user_area())}>
            <i className="far fa-user" ></i>
        </div>

    </nav>

}

export default NavBar