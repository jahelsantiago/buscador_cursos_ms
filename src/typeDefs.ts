import MyDatabase from "./dataBaseManager";

type Asignatura = {
    codigo_asignatura: number;
    nombre_asignatura: string;
    creditos: number;
    descripcion: string;
    id_tipologia: number;
    id_programa: number;
};

type Tipologia = {
    id_tipologia: number;
    nombre_tipologia: string;
};

type Prerequisito = {
    id_prerequisito: number;
    codigo_asignatura: string;
    codigo_asignatura_prerequisito: string;
    es_correquisito: boolean;
};

type Programa = {
    id_programa: number;
    nombre_programa: string;
    id_facultad: number;
};

type Facultad = {
    id_facultad: number;
    nombre_facultad: string;
    id_sede: number;
};

type Sede = {
    id_sede: number;
    nombre_sede: string;
};



interface dataSources {
    myDatabase: MyDatabase;
}


export type { Asignatura, Tipologia, Prerequisito, Programa, Facultad, Sede, dataSources };
