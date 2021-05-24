const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    user_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },

    comment_text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 1000]
      }
    },

    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id'
      },
      onDelete: 'CASCADE'
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: true,
    modelName: 'comment'
  }
)

module.exports = Comment;