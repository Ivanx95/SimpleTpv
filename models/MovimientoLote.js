'use strict'

module.exports = (sequelize, DataTypes) => {
 
		var MovimientoLote =  sequelize.define('movimiento_lote',

		{
			fecha:{
				type : DataTypes.DATE
			} ,
			tipo : {
				type : DataTypes.ENUM('Merma', 'Devolucion', 'Venta') ,
				allowNull:false 
			},
			cantidad : {
				type : DataTypes.INTEGER
			}

		},
		{
				freezeTableName:true,
				underscored:true
		});

		MovimientoLote.associate = function (models) {
				console.log(models);
				models.movimiento_lote.belongsTo(models.lote,
					{onDelete: "CASCADE",
					foreignKey : {
						allowNull:false						
					}
				});
		};

		//MovimientoLote.sync({force:true}).then(function (){});
		return MovimientoLote;
};