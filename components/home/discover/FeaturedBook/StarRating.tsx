import React from 'react';

interface StarRatingProps {
    rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    return (
        <div className="flex select-none items-center">
            {[...Array(totalStars)].map((_, index) => {
                if (index < filledStars) {
                    return (
                        <span
                            key={index + crypto.randomUUID()}
                            className="text-yellow-500"
                        >
                            ★
                        </span>
                    );
                }
                if (index === filledStars && halfStar) {
                    return (
                        <span
                            key={index + crypto.randomUUID()}
                            className="text-yellow-500"
                        >
                            ☆
                        </span>
                    );
                }
                return (
                    <span
                        key={index + crypto.randomUUID()}
                        className="text-lavender"
                    >
                        ☆
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
