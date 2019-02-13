import React from 'react';
import { string, number, shape, func } from 'prop-types';
import { withRouter } from 'react-router';

import Card from '../Card';

import styles from './ProductCard.scss';

const ProductCard = ({
    title,
    image,
    productLabel,
    description,
    priceLabel,
    currency,
    price,
    ctaLink,
    cta,
    router
}) => (
    <Card className={styles.container}>
        <img
            className={styles.image}
            src={image.path}
            alt={image.alt}
        />
        <div className={styles.content}>
            {productLabel && (
                <span className={styles.productLabel}>{productLabel}</span>
            )}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.footer}>
            {/* TODO: Extract Price into /components */}
            <span className={styles.priceContainer}>
                <span className={styles.priceLabel}>{priceLabel}</span>
                <span className={styles.price}>{currency}{(price / 100).toFixed(2)}</span>
            </span>
            {/* TODO: Extract CTA into /components */}
            <div
                className={styles.cta}
                onClick={() => router.push(ctaLink)}
            >{cta}</div>
        </div>
    </Card>
);

ProductCard.propTypes = {
    title: string.isRequired,
    image: shape({
        path: string.isRequired,
        alt: string.isRequired
    }).isRequired,
    productLabel: string.isRequired,
    description: string.isRequired,
    priceLabel: string.isRequired,
    currency: string.isRequired,
    price: number.isRequired,
    ctaLink: string.isRequired,
    cta: string.isRequired,
    router: shape({
        push: func.isRequired
    }).isRequired
};

export default withRouter(ProductCard);
