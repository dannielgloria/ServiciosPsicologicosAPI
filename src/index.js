import app from "./app"

const main = () =>{
    const port= app.listen(app.get('port'));//se actualizó
    console.log('Server on port :8000');
};

main();