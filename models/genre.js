const {
    Sequelize,
    sequelize
} = require("../src/utils/sequelize");


const Genre = sequelize.define(
    "genres", {
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
    }, {
		timestamps:false,
        tableName: "genres"
    }
)

Genre.associate = (models) => {
    Genre.hasOne(models.books, {
		foreignKey: "genreId"
	})
}

module.exports = Genre;
