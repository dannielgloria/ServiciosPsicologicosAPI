import {getConnection} from "../commons/Connection"

const getInfoServices = async (req, res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM InfoServices");
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

const getById = async (req, res) =>{
    try{
        const { idInstitucion} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM InfoServices WHERE idInstitucion = ?", idInstitucion);
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

const addInfoService = async (req, res) =>{
    try{
        const { idInstitucion, name, modalidad, estado, direccion, telefono, horario, webredesSociales, servicio } = req.body;
        if (idInstitucion === null ){
          return res.status(400).json({message:"Bad Request. Please fill all field."})
            
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO `InfoServices`(`idInstitucion`, `name`, `modalidad`, `estado`, `direccion`, `telefono`, `horario`, `webredesSociales`, `servicio` ) VALUES (?,?,?,?,?,?,?,?,?)", [idInstitucion, name, modalidad, estado, direccion, telefono, horario, webredesSociales, servicio]);
        return res.status(200).json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
    //     const newInfoService = req.body;
//     try {
//         // 6.1.2: Acceder a la capa service para tener una respuesta
//         await getConnection.create(newInfoService);
//         res.status(201).send();
//     } catch(error) {
//         // 6.1.3: Si hay un error al acceder al services respondemos un error generico
//         res.status(500).send( { message: 'intenten más tarde' } );
//     }
// };
}

const updateInfoService = async (req, res) =>{
    try{
        const {idInstitucion} = req.params;
        const { name, modalidad, estado, direccion, telefono, horario, webredesSociales, servicio } = req.body;
        // console.log(req.params);
        // console.log(req.body);
        if ( idInstitucion === null  ){
           return res.status(400).json({message:"Bad Request. Please fill all field."})
        }
        const connection = await getConnection();
        console.log(connection);
        const result = await connection.query("UPDATE InfoServices SET `name`= ?,`modalidad`=?,`estado`=?,`direccion`=?, `telefono`=?, `horario`=?, `webredesSociales`=?, `servicio`=? WHERE idInstitucion= ?", [ name, modalidad, estado, direccion, telefono, horario, webredesSociales, servicio, parseInt(idInstitucion)]);
        console.log(result);
        return res.json(result)
        
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

// const updateApartInfoService = async (req, res) =>{
//     try{
//         const {idInstitucion} = req.params;
//         const { name, modalidad, estado, direccion, telefono, horario, webredesSociales, servicio } = req.body;
//         // console.log(req.params);
//         // console.log(req.body);
//         if ( idInstitucion === null  ){
//            return res.status(400).json({message:"Bad Request. Please fill all field."})
//         }
//         const connection = await getConnection();
//         console.log(connection);
//         const result = await connection.query("UPDATE InfoServices SET `name`= ?,`modalidad`=?,`estado`=?,`direccion`=?, `telefono`=?, `horario`=?, `webredesSociales`=?, `servicio`=? WHERE idInstitucion= ?", [ name, modalidad, estado, direccion, telefono, horario, webredesSociales, servicio, parseInt(idInstitucion)]);
//         console.log(result);
//         return res.json(result)
        
//     }catch (error){
//         res.status(500);
//         res.send(error.message)
//     }
// }

const deleteInfoService = async (req, res) =>{
    try{
        const {idInstitucion} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM InfoServices WHERE idInstitucion= ?", 
        idInstitucion);
        
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}



export const methods = {
    getInfoServices,
    getById,
    addInfoService,
    updateInfoService,
    deleteInfoService,
   

}