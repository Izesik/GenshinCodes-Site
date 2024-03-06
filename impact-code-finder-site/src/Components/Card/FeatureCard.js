import React from 'react';
import Card from 'react-bootstrap/Card';
import './FeatureCard.css';


const FeatureCard = ({ title, description }) => {

    return (
        <Card className="feature-card" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="feature-card-title">{title}</Card.Title>
          <Card.Text className="feature-card-description">
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default FeatureCard;