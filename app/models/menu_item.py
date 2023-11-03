from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class MenuItem(db.Model):
    __tablename__ = 'menu_items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    listingId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("listings.id"), ondelete="CASCADE"), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    size = db.Column(db.String(255))
    calories = db.Column(db.Integer)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String)
    imageUrl = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    #relationship
    listing = db.relationship("Listing", back_populates = "menu_item")

    def to_dict(self):
        return {
            'id': self.id,
            'listingId': self.listingId,
            'name': self.name,
            'calories': self.calories,
            'price': self.price,
            'description': self.description,
            'imageUrl': self.imageUrl,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
