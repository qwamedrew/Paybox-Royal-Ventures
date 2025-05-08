import React from 'react';

export const ImportRegulationsPopup = ({ country, isOpen, onClose }) => {
  if (!isOpen || !country) return null;

  const regulations = {
    US: {
      agency: 'FDA (Food and Drug Administration)',
      requirements: [
        'Prior Notice of Food Imports',
        'Food Facility Registration',
        'HACCP compliance for certain foods',
        'FDA Import Alerts compliance'
      ],
      certifications: [
        'FDA Food Facility Registration',
        'FDA Prior Notice',
        'Certificate of Analysis (CoA)',
        'Phytosanitary Certificate for plant products'
      ]
    },
    EU: {
      agency: 'EFSA (European Food Safety Authority)',
      requirements: [
        'Health Certificate',
        'EU Import License',
        'Traceability documentation',
        'Compliance with MRLs (Maximum Residue Levels)'
      ],
      certifications: [
        'Health Certificate',
        'Phytosanitary Certificate',
        'Certificate of Origin',
        'ISO 22000 certification recommended'
      ]
    }
  };

  const data = regulations[country] || {
    agency: 'Local Food Safety Authority',
    requirements: ['Contact local customs for specific requirements'],
    certifications: ['Contact local customs for required certifications']
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Import Regulations: {country}</h2>
          <button onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <div className="regulations-section">
            <h3>Regulatory Authority</h3>
            <p>{data.agency}</p>
          </div>
          <div className="regulations-section">
            <h3>Key Requirements</h3>
            <ul>
              {data.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <div className="regulations-section">
            <h3>Required Documentation</h3>
            <ul>
              {data.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
          <div className="disclaimer">
            This information is provided as guidance only. Regulations may change. 
            Always verify current requirements with your customs broker or relevant authorities.
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ImportRegulationsPopup
