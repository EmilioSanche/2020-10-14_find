//Busqueda de todos los archivos de la tabla.
db.Amigos.find()
//Misma busqueda, pero mostrandose ordenadamente.
db.Amigos.find().pretty()


//Buscamos todas las personas que se llaman Juan.
db.Amigos.find({"Nombre":"Juan"}).pretty()


//Busca todas las personas que tengan 19 o 20 años.
db.Amigos.find( {"Edad": {$in: [19, 20]}})


//Busca las personas que su primer apellido sea Sanchez y ademas
//tengan 20 años.
db.Amigos.find( {"Primer apellido":"Sanchez", "Edad":20}  )


//Busca personas que tengan 19 años o Garcia como segundo apellido.
db.Amigos.find( { $or: [{"Edad":19}, {"Segundo apellido":"Garcia"}] })


//Cuenta cuantos tienen 19 o menos años.
db.Amigos.find( {$or: [{"Edad":19}, {"Edad": {$lt: 19}}] } ).count()