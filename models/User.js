const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

const bcrypt = require('bcrypt');

// Here to create our User model
class User extends Model {
    // Here to set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// Here to define table columns and configuration
User.init(
    {
        // Now define an id column
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        // Now define a username column
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        twitter: {
            type: DataTypes.STRING,
            allowNull: true
        },
        github: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // Now define an email column
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        // Now define a password column
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [4]
          }
        }
      },
  {
      hooks: {
        // Here to set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
          // Here to set up beforeUpdate lifecycle "hook" functionality
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
      },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);


module.exports = User;