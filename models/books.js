const {
    Sequelize,
    sequelize
} = require("../src/utils/sequelize");


const Books = sequelize.define(
    "books", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
		name:  {
			type: Sequelize.STRING,
			allowNull: false
		},
		price: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		imageLink: {
			type: Sequelize.STRING,
			allowNull: true
		}
    }, {
		timestamps:false,
        tableName: "books"
    }
)

Books.associate = (models) => {
	Books.belongsTo(models.genres, {
		foreignKey: "genreId"
	})
}

module.exports = Books;
