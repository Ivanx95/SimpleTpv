'use strict' 
module.exports = (sequelize,DataTypes) => {
var Lote = sequelize.define('Lote',
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
			,productoId : {
				 type:           DataTypes.INTEGER,

        		references:     'Producto',
				field : 'producto_id'
			}

			}

			,{
				freezeTableName:true,
				underscored:true
			}); 
	Lote.associate = function (models) {
		console.log(models);
		models.Lote.belongsTo(models.Producto,
				{onDelete: "CASCADE",
					foreignKey : {
						allowNull:false						
					},
					field : 'producto_id'
					
				}
			)
	}; 

	return Lote;

}