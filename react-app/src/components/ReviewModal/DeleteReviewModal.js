import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as reviewActions from '../../store/reviews'
import { useEffect } from "react";
import './Deletereview.css'
export const DeleteReviewModal = ({ review }) => {

    const dispatch = useDispatch();

    const { closeModal } = useModal();

    const handleClick = (e) => {
        e.preventDefault();
        return dispatch(reviewActions.thunkDeleteReview(review.id)).then(closeModal)
    }

    // console.log("DeleteReviewModal review========>>>>> ", review)

    useEffect(() => {
        dispatch(reviewActions.thunkGetReviewInfo(review.id))
    }, [dispatch])

    return (
        <div className="deleteModal">
            <div id="second-level-reviews">
            <div className="deleteTitle">
                <h2 className="confirmDeleteTitle">Confirm Delete</h2>
                <p className="deleteParagraph">Are you sure you want to delete this review?</p>
            </div>
            <div className="deleteButtons-container">
                <button className="delete-button" onClick={handleClick}> Yes (Delete Review) </button>
                <button className="delete-button" onClick={closeModal}> No (Keep Review) </button>
            </div>
            </div>
        </div>
    )
}
