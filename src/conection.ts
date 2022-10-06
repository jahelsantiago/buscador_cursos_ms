//, "127.0.0.1"
const knexConfig = {
    client: 'mysql',
    connection: {
      host :  'host.docker.internal' ,
      port : 3306,
      user : 'admin',
      password : '2022',
      database : 'sia_asignaturas_db'
    }
  };

  export default knexConfig;