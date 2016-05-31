import React from 'react';

export default ({}) => (
    <div>
        <div className="card center-block">
            <h3 className="card-header">Find adoptable pets.</h3>
            <img className="img-fluid" src="http://placekitten.com/g/500/500" alt="" />
            <div className="card-block">
                <p className="card-text">
                    Swipe through profiles of adoptable pets in your area.
                </p>
                <button className="btn btn-danger-outline m-r-1">
                    <i className="fa fa-times" aria-hidden="true" />
                </button>
                <button className="btn btn-success-outline m-l-1">
                    <i className="fa fa-check" aria-hidden="true" />
                </button>
            </div>
        </div>
    </div>
);