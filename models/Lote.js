'use strict' 
module.exports = (sequelize,DataTypes) => {
var Lote = sequelize.define('lote',
			//columns
			{
			fecha:{
				type : DataTypes.DATE
			},
			precioCompra :{
				type : DataTypes.DECIMAL(10,2),
				field : 'precio_compra'
			},
			cantidad : {
				type : DataTypes.DECIMAL(10,2),
				field : 'cantidad'
			}
			/**,productoId : {
				 type:           DataTypes.INTEGER,

        		references:     'Producto',
				field : 'producto_id'
			}*/

			}

			,{
				freezeTableName:true,
				underscored:true
			}); 
	Lote.associate = function (models) {
		console.log(models);
		models.lote.belongsTo(models.producto,
				{onDelete: "CASCADE",
					foreignKey : {
						allowNull:false						
					}
				}
			)
	}; 

	//Lote.sync({force:true}).then(function (){});

	return Lote;

}