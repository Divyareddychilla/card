import React from 'react';
import "./Card.scss"

const Card: React.FC = () => {
    return (
        <div className="card">
            <div className='inner_card'>
                <h1 className='main_heading'>TOTAL STOCK IN YARDS</h1>
                <div className='second_container'>
                    <div>
                        <h1 className='number_count'>
                            12,505
                        </h1>
                        <h1 className='text_count'>
                            [Tons]
                        </h1>
                    </div>
                    <div className='box_container'>
                        <div className='inner_box_container'>
                            <svg className="icon_image" xmlns="http://www.w3.org/2000/svg" width="33.94px" height="33.94px" viewBox="0 0 35 35" fill="none">
                                <path d="M17.9401 9.56374L17.9401 24.5559" stroke="#349F63" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.0644 16.4688L17.9404 9.5634L24.8164 16.4688" stroke="#349F63" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;
