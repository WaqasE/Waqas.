import React, { useContext } from 'react';
import Theme from '../config/Theme'
import Rating from './Rating';
import ScrollIndicator from './ScrollIndicator';

const reviews = [
    {
        id: 1,
        review: 'I have to say, Waqas Ehmed it\'s your man. He\'s so professional and available. I highly recommend you to try him.',
        rate: 5,
        href: 'https://www.fiverr.com/waqas_ehmed?up_rollout=true'
    },
    {
        id: 2,
        review: 'Seller did a great job, he actually care about the job, not just trying to get the job done anyhow and move to the next gig. I highly recommend',
        rate: 5,
        href: 'https://www.fiverr.com/waqas_ehmed?up_rollout=true'
    },
    {
        id: 3,
        review: 'Very good to work with and a good communicator. Genuine guy and would work with again.',
        rate: 5,
        href: 'https://www.fiverr.com/waqas_ehmed?up_rollout=true'
    },
    // {
    //     id: 4,
    //     review: 'He is very fast and he respect his word. Good job and thank a lot for your help',
    //     rate: 5
    // }
]


function Reviews({ref}) {
    const { theme } = useContext(Theme)
    return (
        <div  ref={ref} className="reviews">
            <p className="reviewsHeading" style={{ color: theme === 'dark' ? '' : 'black' }}>Reviews</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="reviewsContainer">
                    {
                        reviews.map(
                            ({ id, review, rate, href }) => (
                                <div onClick={() => window.open(href, "_blank")} className="reviewWrap" style={{ backgroundColor: theme === 'dark' ? '' : 'white' }}>
                                    <p key={id} className="review" style={{ color: theme === 'dark' ? '' : 'black' }}> <span className="quotes" style={{ position: 'absolute', width: 50, marginLeft: -40, marginTop: -30, color: theme === 'dark' ? '' : 'grey' }}>&#10077;</span>{review}<span className="quotes" style={{ position: 'absolute', width: 50, marginTop: 5, color: theme === 'dark' ? '' : 'grey' }}>&#10078;</span></p>
                                    <Rating rate={rate} />
                                </div>
                            ))}
                </div>
                <ScrollIndicator />
            </div>
        </div>
    );
}

export default Reviews;