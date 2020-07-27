import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { close_user_area } from '../../store/actions/user'

const UserArea = () => {
    const dispatch = useDispatch()
    const [expand, setExpand] = useState(null)
    const [browsedJob, setBrowsedJob] = useState([])
    const { userAreaOpen } = useSelector(state => state.user)

    useEffect(() => {
        if (userAreaOpen) {
            setExpand("expand")
        } else {
            setExpand(null)
        }
    }, [userAreaOpen])

    useEffect(() => {
        const history = JSON.parse(localStorage.getItem("testingBrowsed"))
        if (history) {
            return setBrowsedJob(history)
        }
    }, [userAreaOpen])
    return <div className={`user-area-modal ${expand}`}>
        <p className="close-user-area-div" onClick={() => dispatch(close_user_area())}><i className="fas fa-arrow-left"></i> </p>
        <div className="user-area-user_info">
            <div className="user-area-user_info_pic">
                <i className="far fa-user" ></i>
            </div>
            <div className="user-area-user_info_details">
                <p> Hi User </p>
            </div>
        </div>
        <div className="browsing-history">
            <h4>Recently browsed jobs</h4>
            {userAreaOpen && browsedJob.length > 0 && browsedJob.map((history, index) => {
                if (index <= 4) {
                    return (<div className="browsing-history-card" id={index}>
                        <p>{history.company}</p>
                        <p>{history.title}</p>
                        <a href={`/details/${history.id}`} target="_blank"> View Details</a>
                    </div>)
                }
            })}
        </div>



    </div>
}

export default UserArea