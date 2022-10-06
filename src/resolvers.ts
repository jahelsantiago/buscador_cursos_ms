import { Asignaturas, Programas, Tipologias, Facultades, Sedes } from "./data"
import { Asignatura, dataSources, Facultad, Programa, Sede, Tipologia } from "./typeDefs"

const resolvers = {
    Query: {
        asignaturas: async (_ : any , __ : any, { dataSources } : {dataSources : dataSources}) => {
            const response = await dataSources.myDatabase.getAsignaturas();
            return response
        },
        asignatura: async (_: any, args: {codigo_asignatura : number}, { dataSources } : {dataSources : dataSources}) => {
            // parse args.codigo_asignatura to int
            const response = await dataSources.myDatabase.getAsignatura(args.codigo_asignatura);
            //retunr error if response is empty
            if (response.length === 0) {
                throw new Error("No existe la asignatura con el codigo " + args.codigo_asignatura);
            }
            return response[0];
        },
        tipologias: async (_ : any , __ : any, { dataSources } : {dataSources : dataSources}) => {
            return await dataSources.myDatabase.getTipologias();
        },
        tipologia: async (_: any, args: {id_tipologia : number}, { dataSources } : {dataSources : dataSources}) => {
            const response = await dataSources.myDatabase.getTipologia(args.id_tipologia);
            if (response.length === 0) {
                throw new Error("No existe la tipologia con el id " + args.id_tipologia);
            }
            return response[0];
        },  
        programas: async (_ : any , __ : any, { dataSources } : {dataSources : dataSources}) => {
            return await dataSources.myDatabase.getProgramas();
        },
        programa: async (_: any, args: {id_programa : number}, { dataSources } : {dataSources : dataSources}) => {
            const response = await dataSources.myDatabase.getPrograma(args.id_programa);
            if (response.length === 0) {
                throw new Error("No existe el programa con el id " + args.id_programa);
            }
            return response[0];
        },
        facultades: async (_ : any , __ : any, { dataSources } : {dataSources : dataSources}) => {
            return await dataSources.myDatabase.getFacultades();
        },
        facultad: async (_: any, args: {id_facultad : number}, { dataSources } : {dataSources : dataSources}) => {
            const response = await dataSources.myDatabase.getFacultad(args.id_facultad);
            //retunr error if response is empty
            if (response.length === 0) {
                throw new Error("No existe la facultad con el id " + args.id_facultad);
            }
            return response[0];
        },
        sedes: async (_ : any , __ : any, { dataSources } : {dataSources : dataSources}) => {
            return await dataSources.myDatabase.getSedes();
        },
        sede: async (_: any, args: {id_sede : number}, { dataSources } : {dataSources : dataSources}) => {
            const response = await dataSources.myDatabase.getSede(args.id_sede);
            //retunr error if response is empty
            if (response.length === 0) {
                throw new Error("No existe la sede con el id " + args.id_sede);
            }
            return response[0];
        },
        prerequisitos: async (_ : any , __ : any, { dataSources } : {dataSources : dataSources}) => {
            return await dataSources.myDatabase.getPrerequisitos();
        },
        prerequisito: async (_: any, args: {codigo_asignatura : number}, { dataSources } : {dataSources : dataSources}) => {
            const response = await dataSources.myDatabase.getPrerequisito(args.codigo_asignatura);
            //retunr error if response is empty
            if (response.length === 0) {
                throw new Error("No existe el prerequisito con el id " + args.codigo_asignatura);
            }
            return response;
        }
    }
}

export default resolvers