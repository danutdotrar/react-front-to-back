import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

const ListingItem = ({ listing, id }) => {
    return (
        <li className="categoryListing">
            <Link
                to={`/category/${listing.type}`}
                className="categoryListingLink"
            >
                <img
                    src={listing.imgUrls[0]}
                    alt={listing.name}
                    className="categoryListingImg"
                />
            </Link>
        </li>
    );
};

export default ListingItem;
