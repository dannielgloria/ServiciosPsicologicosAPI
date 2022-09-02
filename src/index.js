import app from "./app"

const main = () =>{
    const port= app.listen(app.get('port'));
    console.log('Server on port :8000');
};

main();