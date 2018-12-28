'use strict'
module.exports =(sequelize,DataTypes) => {
 
	var Producto = sequelize.define('Producto',{
					id:{
						type : DataTypes.INTEGER,
						primaryKey:true,
						autoIncrement:true
						

					},
					descripcion: {
						type: DataTypes.STRING, 
						field:'descripcion'
					},
					codigo : {
						type : DataTypes.STRING,
						field : 'codigo'
					},
					precioActual: {
						type :  DataTypes.DECIMAL(10,2),
						field : 'precio_actual'
					}
				},
			{
				freezeTableName: true
			});

	Producto.associate = function (models) {
		models.Producto.hasMany(models.Lote);
	};

	Producto.sync({force:true}).then(function(){

	});
	return Producto;
}