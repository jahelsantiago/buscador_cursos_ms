const { ApolloServer, gql } = require('apollo-server')


 const typeDefs =  gql`
  type Asignatura {
    codigo_asignatura: Int!
    nombre_asignatura: String
    creditos: Int
    descripcion: String
    id_programa: Int
    id_tipologia: Int
  }

  type Tipologia {
    id_tipologia: Int!
    nombre_tipologia: String!
  }

  type Prerequisito {
    id_prerequisito: Int!
    codigo_asignatura: String!
    codigo_asignatura_prerequisito: String!
    es_correquisito: Boolean!
  }

  type Programa {
    id_programa: Int!
    nombre_programa: String!
    id_facultad: Int!
  }

  type Facultad {
    id_facultad: Int!
    nombre_facultad: String!
    id_sede: Int!
  }

  type Sede {
    id_sede: Int!
    nombre_sede: String!
  }

  type Query {
    asignaturas: [Asignatura]
    asignatura(codigo_asignatura: Int!): Asignatura
    sedes: [Sede]
    sede(id_sede: Int!): Sede
    facultades: [Facultad]
    facultad(id_facultad: Int!): Facultad
    programas: [Programa]
    programa(id_programa: Int!): Programa
    tipologias: [Tipologia]
    tipologia(id_tipologia: Int!): Tipologia
    prerequisito(codigo_asignatura: Int!): [Prerequisito]
    prerequisitos: [Prerequisito]
  }
`


export default typeDefs
