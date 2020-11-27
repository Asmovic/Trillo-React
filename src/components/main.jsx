/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default () => (
    <main className="hotel-view">
        <div className="gallery">
            <figure className="gallery__item">
                <img src="img/hotel-1.jpg" alt="hotel 1" className="gallery__photo" />
            </figure>
            <figure className="gallery__item">
                <img src="img/hotel-2.jpg" alt="hotel 2" className="gallery__photo" />
            </figure>
            <figure className="gallery__item">
                <img src="img/hotel-3.jpg" alt="hotel 3" className="gallery__photo" />
            </figure>
        </div>
        <div className="overview">
            <h1 className="overview__heading">
                Hotel Rio De Janeiro
        </h1>
            <div className="overview__stars">
                <svg className="overview__icon-star">
                    <use xlinkHref="img/sprite.svg#icon-star" />
                </svg>
                <svg className="overview__icon-star">
                    <use xlinkHref="img/sprite.svg#icon-star" />
                </svg>
                <svg className="overview__icon-star">
                    <use xlinkHref="img/sprite.svg#icon-star" />
                </svg>
                <svg className="overview__icon-star">
                    <use xlinkHref="img/sprite.svg#icon-star" />
                </svg>
                <svg className="overview__icon-star">
                    <use xlinkHref="img/sprite.svg#icon-star" />
                </svg>
            </div>
            <div className="overview__location">
                <svg className="overview__icon-location">
                    <use xlinkHref="img/sprite.svg#icon-location-pin" />
                </svg>
                <button className="btn-inline">Koinor, Brazil</button>
            </div>
            <div className="overview__rating">
                <div className="overview__rating-average">9.3</div>
                <div className="overview__rating-count">850 votes</div>
            </div>
        </div>
        <div className="detail">
            <div className="description">
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis
                    ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae
                    architecto voluptate.
          </p>
                <p className="paragraph">
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus,
                    inventore iure aliquid aliquam.
          </p>
                <ul className="list">
                    <li className="list__item">Close to the beach</li>
                    <li className="list__item">Breakfast included</li>
                    <li className="list__item">Free airport shuttle</li>
                    <li className="list__item">Free wifi in all rooms</li>
                    <li className="list__item">Air conditioning and heating</li>
                    <li className="list__item">Pets allowed</li>
                    <li className="list__item">We speak all languages</li>
                    <li className="list__item">Perfect for the families</li>
                </ul>
                <div className="recommend">
                    <p className="recommend__count">
                        Patricia and 4 other friends recommend this hotel.
            </p>
                    <div className="recommend__friends">
                        <img src="img/user-3.jpg" alt="photo 1" className="recommend__photo" />
                        <img src="img/user-4.jpg" alt="photo 4" className="recommend__photo" />
                        <img src="img/user-5.jpg" alt="photo 5" className="recommend__photo" />
                        <img src="img/user-6.jpg" alt="photo 6" className="recommend__photo" />
                    </div>
                </div>
            </div>
            <div className="user-reviews">
                <figure className="review">
                    <blockquote className="review__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto
                        dicta animi, totam, itaque officia ex.
            </blockquote>
                    <figcaption className="review__user">
                        <img src="img/user-1.jpg" alt="user 1" className="review__photo" />
                        <div className="review__user-box">
                            <p className="review__user-name">Allan Smith</p>
                            <p className="review__user-date">Mar 12th, 2020</p>
                        </div>
                        <div className="review__rating">8.2</div>
                    </figcaption>
                </figure>
                <figure className="review">
                    <blockquote className="review__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto
                        dicta animi.
            </blockquote>
                    <figcaption className="review__user">
                        <img src="img/user-2.jpg" alt="user 2" className="review__photo" />
                        <div className="review__user-box">
                            <p className="review__user-name">Alakija Eunice</p>
                            <p className="review__user-date">Apr 23rd, 2020</p>
                        </div>
                        <div className="review__rating">9.4</div>
                    </figcaption>
                </figure>
                <button className="btn-inline">Show all <span>→</span></button>
            </div>
        </div>
        <div className="cta">
            <h2 className="cta__book-now">
                Good news! We have 6 free rooms for your selected dates!
        </h2>
            <button className="btn">
                <span className="btn__visible">Book now</span>
                <span className="btn__invisible">Only 6 rooms left</span>
            </button>
        </div>
    </main>
);
