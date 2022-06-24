import React from 'react';

const Card = () => {
    return (
        <div className='card'>
            <h2>Falcon Heavy <br /> Overview</h2>

            <ul>
                <li>HEIGHT :<span> 70 m / 229.6 ft</span></li>
                <li>DIAMETER :<span> 12.2 m / 39.9 ft</span></li>
                <li>MASS :<span> 1,420,788 kg / 3,125,735 lb</span></li>
                <li>PAYLOAD TO LEO :<span> 63,800 kg / 140,660 lb</span></li>
                <li>PAYLOAD TO GTO :<span> 26,700 kg / 58,860 lb</span></li>
                <li>PAYLOAD TO MARS :<span> </span> 16,800 kg / 37,040 lb</li>

            </ul>
            <div className="wrapper"></div>

        
            <h3>UNMATCHED <br /> PERFORMANCE</h3>
            <h4>With more than 5 million pounds of thrust at liftoff, Falcon Heavy is <br /> the most capable rocket flying. By comparison, the liftoff thrust of <br /> the Falcon Heavy equals approximately eighteen 747 aircraft at full <br /> power. Falcon Heavy can lift the equivalent of a fully loaded 737 <br /> jetliner—complete with passengers, luggage and fuel—to orbit.</h4>
        </div>
    );
};

export default Card;