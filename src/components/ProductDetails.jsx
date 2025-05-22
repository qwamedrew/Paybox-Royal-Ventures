import React, { useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
const ProductDetails = ({
  product,
  onInquire,
  onBack,
  navigateToLogin,
  onAddToCart,
}) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    images = [],
    mainImage,
    category,
    origin,
    price,
    unit,
    inStock,
    minOrder,
    description,
    specifications = {},
    certifications = [],
    seasonality,
    shelfLife,
    packaging,
    relatedProducts = [],
  } = product;

  const [selectedImage, setSelectedImage] = useState(
    mainImage || (images.length > 0 ? images[0] : "")
  );

  // Certification badges
  const certificationBadges = {
    organic: "bg-green-100 text-green-800",
    fairtrade: "bg-blue-100 text-blue-800",
    kosher: "bg-purple-100 text-purple-800",
    halal: "bg-orange-100 text-orange-800",
    vegan: "bg-teal-100 text-teal-800",
  };

  const { addToCart } = useCart();

  // Gallery with thumbnails and main image
  const renderGallery = () => {
    const allImages = mainImage ? [mainImage, ...images] : images;

    if (allImages.length === 0) {
      return (
        <div className="bg-gray-200 h-80 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">No image available</span>
        </div>
      );
    }

    return (
      <div>
        <div className="mb-4 bg-gray-100 rounded-lg overflow-hidden h-80">
          <img
            src={selectedImage}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>

        {allImages.length > 1 && (
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {allImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                  selectedImage === img
                    ? "border-green-500"
                    : "border-transparent"
                }`}
                aria-label={`Select image ${index + 1} for ${name}`}
              >
                <img
                  src={img}
                  alt={`${name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-15 py-12">
      {/* Back button */}
      <div>
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 rounded-lg hover:text-white hover:bg-green-600 hover:shadow-md"
          aria-label="Back to products"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Products
        </button>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Images */}
          <div>{renderGallery()}</div>

          {/* Right Column: Product Info */}
          <div>
            <div className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-1">
                    {name}
                  </h1>
                  <div className="flex flex-wrap items-center text-sm text-gray-600 mb-2">
                    <span className="mr-3">{category}</span>
                    {origin && (
                      <>
                        <span className="mr-3">•</span>
                        <span>Origin: {origin}</span>
                      </>
                    )}
                  </div>

                  {/* Certifications */}
                  {certifications.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {certifications.map((cert) => (
                        <span
                          key={cert}
                          className={`text-xs px-2 py-0.5 rounded ${
                            certificationBadges[cert.toLowerCase()] ||
                            "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Info */}
                <div className="text-right">
                  {inStock ? (
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      In Stock
                    </span>
                  ) : (
                    <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>

              {/* Price Section */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                {price ? (
                  <div className="text-2xl font-bold text-green-700">
                    ${price}{" "}
                    <span className="text-base font-normal text-gray-600">
                      / {unit}
                    </span>
                  </div>
                ) : (
                  <div className="text-lg italic text-gray-600">
                    Price upon request
                  </div>
                )}
                {minOrder && (
                  <div className="text-sm text-gray-600 mt-1">
                    Minimum order: {minOrder} {unit}
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            {description && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Description
                </h2>
                <p className="text-gray-600">{description}</p>
              </div>
            )}

            {/* Product Specifications */}
            {Object.keys(specifications).length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Specifications
                </h2>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                          Specification
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {Object.entries(specifications).map(([key, value]) => (
                        <tr key={key}>
                          <td className="px-4 py-3 text-sm font-medium text-gray-700">
                            {key}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {seasonality && (
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">
                    Seasonality
                  </h3>
                  <p className="text-sm text-gray-600">{seasonality}</p>
                </div>
              )}

              {shelfLife && (
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">
                    Shelf Life
                  </h3>
                  <p className="text-sm text-gray-600">{shelfLife}</p>
                </div>
              )}

              {packaging && (
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">
                    Packaging
                  </h3>
                  <p className="text-sm text-gray-600">{packaging}</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="large"
                fullWidth
                onClick={() => {
                  addToCart(product); // ✅ Directly from context
                  navigate("/cart");
                }}
                disabled={!inStock}
              >
                Buy Now
              </Button>

              <Link to="productinquiryfd">
                <Button
                  variant="secondary"
                  size="large"
                  fullWidth
                  disabled={!inStock}
                >
                  Enquire About This Product
                </Button>
              </Link>

              <Button variant="outline" size="large">
                Download Spec Sheet
              </Button>
              {onAddToCart && (
                <Button
                  variant="success"
                  size="large"
                  fullWidth
                  onClick={() => addToCart(product)} // ✅ Directly from context
                  disabled={!inStock}
                >
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="h-32 bg-white rounded-md overflow-hidden mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-gray-800 truncate">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
