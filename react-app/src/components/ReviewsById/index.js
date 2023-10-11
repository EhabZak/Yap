import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink, useParams } from "react-router-dom";
//! ///////////////////////////////////////////////////////////
import { thunkGetListingReviews } from "../../store/reviews";
import { thunkGetListingInfo } from "../../store/listings";
import { DeleteReviewModal } from "../ReviewModal/DeleteReviewModal"
import { CreateReviewModal } from "../ReviewModal";
import OpenModalButton from "../OpenModalButton";
import { UpdateReviewModal } from "../ReviewModal/UpdateReviewModal";
import "../ManageReviews/ManageReviews.css"
//! ///////////////////////////////////////////////////////////

export const ListingReviews = ({listingId}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const { listingId } = useParams();

    let user = useSelector((state) => state.session.user);
    const reviews = useSelector((state) => state.reviews.allReviews);
    const listing = useSelector((state) => state.listing.singleListing);

    const reviewsList = Object.values(reviews);
    // const listingsList = Object.values(listings)

    // listingsList.map(listing => console.log("single listing: ", listing.name))
    // console.log("listing: ", listing)
    console.log("reviewList: ", reviewsList)

    function lowBudgetDateConverter(date) {
        let newDate = String(new Date(date))
        let month = newDate.substring(4, 7)
        let day = newDate.substring(7,10)
        let year = newDate.substring(10, 16)
        return month.concat(day, ",".concat(year))
    }

    // console.log(">>>>>>>>>>>>> LOOK: ", reviewsList.listing)

    // function getListingName(listingId) {
    //     const target_listing = listingsList.find((listing) => {
    //         listing.id === listingId
    //     })
    //     return target_listing.name
    // }
    // console.log(getListingName(1))

    // console.log("reviewsList.find", reviewsList.find((review) => review.user_id === user.id ))

    useEffect(() => {
        dispatch(thunkGetListingReviews(listingId));
        dispatch(thunkGetListingInfo(listingId));
    }, [dispatch, reviewsList.length]);

    if (!user) user = 0;
    if (!reviews) return null;
    // if (!listings) return null;

    return (
        <div className="all-reviews-container">
            {!(reviewsList.find((review) => review.user_id === user.id )) && user.id !== listing.owner_id && user.id ?
                <OpenModalButton
                    className="delete-button"
                    buttonText='Create a Review'
                    modalComponent={<CreateReviewModal listing={listing}/>}
                />
                    :
                <></>
            }
            {reviewsList.map((review) => (
                <div className="review-container" key={review.id}>
                    <div id="user-review-container">
                        <p id="user-logo"><i className="fa-solid fa-circle-user"></i> </p> {review.user}
                    </div>
                    <div id="review-stars-date">
                    <div className="review-stars">
                        {/* <h4>Stars: </h4> */}
                        <div className= {review.stars >= 1 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
                        <div className= {review.stars >= 2 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
                        <div className= {review.stars >= 3 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
                        <div className= {review.stars >= 4 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
                        <div className= {review.stars >= 5 ? "fa-solid fa-star" : "fa-regular fa-star"}></div>
                    </div>
                    <p>{lowBudgetDateConverter(review.updated_at)}</p>
                    </div>
                    <div className="review-div">
                        {/* <h4>Review:</h4> */}
                        {review.review}
                    </div>
                    {/* <div>
                        <h4>Updated on: </h4> {lowBudgetDateConverter(review.updated_at)}
                    </div> */}
                    <div>
                        {review.user_id === user.id && (
                            <div id="review-buttons">
                                <OpenModalButton
                                    className="delete-button"
                                    buttonText='Delete'
                                    modalComponent={<DeleteReviewModal review={review}/>}
                                />
                                <OpenModalButton
                                    className="delete-button"
                                    buttonText='Update'
                                    modalComponent={<UpdateReviewModal updateReview={review}/>}
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
