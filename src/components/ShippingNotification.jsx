import React from 'react';

export const ShippingNotification = ({ isOpen, onClose, notification }) => {
  if (!isOpen || !notification) return null;

  const getNotificationClass = (type) => {
    switch (type) {
      case 'delay': return 'notification-warning';
      case 'arrival': return 'notification-success';
      case 'customs': return 'notification-info';
      default: return 'notification-default';
    }
  };

  return (
    <div className={`notification ${getNotificationClass(notification.type)}`}>
      <div className="notification-icon" aria-hidden="true">
        {notification.type === 'delay' && '⚠️'}
        {notification.type === 'arrival' && '🚚'}
        {notification.type === 'customs' && '📄'}
      </div>
      <div className="notification-content">
        <h3>{notification.title}</h3>
        <p>{notification.message}</p>
        {notification.actionLink && (
          <a href={notification.actionLink}>View Details →</a>
        )}
      </div>
      <button onClick={onClose}>×</button>
    </div>
  );
};

export default ShippingNotification
