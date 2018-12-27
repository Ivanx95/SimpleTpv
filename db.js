/*var mysql = require('mysql');


var con = mysql.createConnection({
		host: "localhost",
		user:"root",
		password: "jaisen95"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});var Sequelize = require('sequelize');

	var sequelize = new Sequelize('tpv','root','jaisen95',
			{
				host:'localhost',
				dialect:'mysql',
				pool:{
					max: 5,
					min:0,
					idle:10000
				}


			}


		);

	var Producto = sequelize.define('Producto',{
					id:{
						type : Sequelize.INTEGER,
						primaryKey:true,
						autoIncrement:true
						

					},
					descripcion: {
						type: Sequelize.STRING, 
						field:'descripcion'
					},
					codigo : {
						type : Sequelize.STRING,
						field : 'codigo'
					},
					precioActual: {
						type :  Sequelize.DECIMAL(10,2),
						field : 'precio_actual'
					}
				},
			{
				freezeTableName: true,
				getterMethods:{
					id : function (){
						return this.id;
					}
				}
			});

	var Lote = sequelize.define('Lote',
			//columns
			{
			fecha:{
				type : Sequelize.DATE
			},
			precioCompra :{
				type : Sequelize.DECIMAL(10,2),
				field : 'precio_compra'
			},
			cantidad : {
				type : Sequelize.DECIMAL(10,2),
				field : 'cantidad'
			}
			
			}

			,{
				freezeTableName:true,
				underscored:true
			}); 



		/*Producto.sync({force:true}).then(function(){
						  console.log('before insert')
						  return Producto.create({
								descripcion : 'Coca cola',
								codigo : 'u89u89u89',
								precioActual : 20.67
							});
							
		});
		
		
	
		Lote.belongsTo(Producto);						
		

		

		var p1;
		
		Producto.findOne({where:{id : 1}}).then(function(models){
			p1=models;
			
			
			console.log('Id '+models.dataValues.id);
			Lote.sync({force:true}).then(
 				function(){

 					var lot = new Lote();
 					lot.setProducto(models);
 					lot.setPrecioCompra(10);
 					lot.setCantidad(2);
 					
 					return Lote.create(
 						
 						lot
 						
 					).then(
 						function (models){
 							console.log('getting Lotes')
 							console.log(models);
 						}
 					);
 					
 				}).catch(function (){

 				});
		});

 		
		
**/
 var express = require('express');
 var models  = require('./models');

   models.Producto.findAll(
    	
  	).then(function(lotes) {
  			console.log(lotes[0].dataValues)
  			 	

  	});
