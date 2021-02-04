import React from 'react';
import Icon from '@material-ui/core/Icon'

const rateList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]

function Rating({ rate = 5 }) {
    return (
        <div className="rating">
            {
                rateList.map(
                    ({ id }) => (<Icon key={id} style={{ fontSize: 22, color: rate >= id ? 'gold' : 'grey', marginRight: 5 }}>star_rate</Icon>))
            }
        </div>
    );
}

export default Rating;