import React from 'react';
import Button from './Button';

const ProductCard = ({
    product,
    layout = 'grid', // 'grid' or 'list'
    onInquire,
}) => {
    const {
        id,
        name,
        image,
        category,
        origin,
        price,
        unit,
        inStock,
        minOrder,
        description,
        certifications = [],
    } = product;

    // Truncate description based on layout
    const truncateDescription = (text, maxLength) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    const displayDescription = layout === 'grid' 
        ? truncateDescription(description, 100) 
        : truncateDescription(description, 200);

    // Certification badges
    const certificationBadges = {
        organic: 'bg-green-100 text-green-800',
        fairtrade: 'bg-blue-100 text-blue-800',
        kosher: 'bg-purple-100 text-purple-800',
        halal: 'bg-orange-100 text-orange-800',
        vegan: 'bg-teal-100 text-teal-800',
    };

    return layout === 'grid' ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
            {/* Product Image */}
            <div className="relative h-48">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover"
                />
                {!inStock && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Out of Stock
                    </div>
                )}
                {origin && (
                    <div className="absolute bottom-2 left-2 bg-white bg-opacity-80 text-xs font-medium px-2 py-1 rounded">
                        Origin: {origin}
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{name}</h3>
                    <span className="text-sm font-medium text-gray-500">{category}</span>
                </div>

                {/* Price Section */}
                <div className="mb-3">
                    {price ? (
                        <div className="font-bold text-green-700">
                            ${price} <span className="text-sm font-normal text-gray-600">/ {unit}</span>
                        </div>
                    ) : (
                        <div className="text-sm italic text-gray-600">Price upon request</div>
                    )}
                    {minOrder && (
                        <div className="text-xs text-gray-500 mt-1">Min order: {minOrder} {unit}</div>
                    )}
                </div>

                {/* Description */}
                {description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{displayDescription}</p>
                )}

                {/* Certifications */}
                {certifications.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                        {certifications.map(cert => (
                            <span 
                                key={cert} 
                                className={`text-xs px-2 py-0.5 rounded ${certificationBadges[cert.toLowerCase()] || 'bg-gray-100 text-gray-800'}`}
                            >
                                {cert}
                            </span>
                        ))}
                    </div>
                )}

                {/* Action Button */}
                <Button 
                    variant="primary" 
                    size="small" 
                    fullWidth 
                    onClick={() => onInquire(id)}
                    disabled={!inStock}
                >
                    Inquire Now
                </Button>
            </div>
        </div>
    ) : (
        // List Layout
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="relative h-48 md:h-auto md:w-1/4">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover"
                />
                {!inStock && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Out of Stock
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-500">{category}</span>
                            {origin && (
                                <span className="text-sm text-gray-500">• Origin: {origin}</span>
                            )}
                        </div>
                    </div>

                    {/* Price Section */}
                    <div className="text-right">
                        {price ? (
                            <div className="font-bold text-green-700">
                                ${price} <span className="text-sm font-normal text-gray-600">/ {unit}</span>
                            </div>
                        ) : (
                            <div className="text-sm italic text-gray-600">Price upon request</div>
                        )}
                        {minOrder && (
                            <div className="text-xs text-gray-500 mt-1">Min order: {minOrder} {unit}</div>
                        )}
                    </div>
                </div>

                {/* Description */}
                {description && (
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{displayDescription}</p>
                )}

                {/* Bottom Section */}
                <div className="flex justify-between items-center mt-auto">
                    {/* Certifications */}
                    <div className="flex flex-wrap gap-1">
                        {certifications.map(cert => (
                            <span 
                                key={cert} 
                                className={`text-xs px-2 py-0.5 rounded ${certificationBadges[cert.toLowerCase()] || 'bg-gray-100 text-gray-800'}`}
                            >
                                {cert}
                            </span>
                        ))}
                    </div>

                    {/* Action Button */}
                    <Button 
                        variant="primary" 
                        size="small" 
                        onClick={() => onInquire(id)}
                        disabled={!inStock}
                    >
                        Inquire Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
