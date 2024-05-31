const Sequelize = require('sequelize');

class User extends Sequelize.Model{
    static initiate(sequelize) {
        User.init({
            // 테이블의 컬럼 작성
            name:{
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true
            },
            age:{
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false
            },
            married:{
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            comment:{
                type: Sequelize.TEXT,
                allowNull: true
            },
            created_at:{
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            }
        }, {
            // 옵션
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {
        db.User.hasMany(db.Comment, {foreignKey: 'commenter', sourceKey: 'id' });
    }
}

module.exports = User;