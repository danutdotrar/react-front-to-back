import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase.config";
import { Spinner } from "../components/Spinner";
import shareIcon from "../assets/svg/shareIcon.svg";

const Listings = () => {
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [shareLinkCopied, setShareLinkCopied] = useState(null);

    const navigate = useNavigate();
    const params = useParams();
    const auth = getAuth();

    useEffect(() => {
        const fetchListing = async () => {
            const docRef = doc(db, "listings", params.listingId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setListing(docSnap.data());
                setLoading(false);
            }
        };

        fetchListing();
    }, [navigate, params.listingId]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <main>
            {/* SLIDER  */}

            <div
                className="shareIconDiv"
                onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setTimeout(() => {
                        setShareLinkCopied(false);
                    }, 2000);
                }}
            >
                <img src={shareIcon} alt="" />
            </div>

            {shareLinkCopied && <p className="linkCopied">Link copied!</p>}

            <div className="listingDetails">
                <p className="listingName">
                    {listing.name} -{" "}
                    {listing.offer
                        ? listing.discountedPrice
                        : listing.regularPrice}
                    $
                </p>
            </div>
        </main>
    );
};
NEXT; // 16. 2. NEXT PART
export default Listings;
