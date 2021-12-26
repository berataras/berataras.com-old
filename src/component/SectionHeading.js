import React from 'react';

function SectionHeading(props) {
    const {title, desc} = props;
    return (
        <div className="section-heading">
            <h2>{title} <span className="not-invert"></span></h2>
            {desc &&
                <p>
                    {desc}
                </p>
            }
        </div>
    );
}

export default SectionHeading;
