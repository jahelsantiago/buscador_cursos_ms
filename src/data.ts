const Asignaturas = [
    {
        codigo_asignatura: "A0001",
        nombre_asignatura: "Matemáticas",
        descripcion : "Matemáticas básicas", 
        creditos: 4,
        id_tipo: 1,
        id_programa: 1,
    },
    {
        codigo_asignatura: "A0002",
        nombre_asignatura: "Física",
        descripcion : "Física básica",
        creditos: 4,
        id_tipo: 1,
        id_programa: 1,
    },
    {
        codigo_asignatura: "A0003",
        nombre_asignatura: "Química",
        descripcion : "Química básica",
        creditos: 4,
        id_tipo: 1,
        id_programa: 1,
    },
    {
        codigo_asignatura: "A0004",
        nombre_asignatura: "Programación",
        descripcion : "Programación básica",
        creditos: 4,
        id_tipo: 3,
        id_programa: 2,
    },
    {
        codigo_asignatura: "A0005",
        nombre_asignatura: "Inglés",
        descripcion : "Inglés básico",
        creditos: 4,
        id_tipo: 2,
        id_programa: 2,
    },
    {
        codigo_asignatura: "A0006",
        nombre_asignatura: "Historia",
        descripcion : "Historia básica",
        creditos: 4,
        id_tipo: 2,
        id_programa: 2,
    },
]

const Tipologias = [
    {
        id: 1,
        nombre: "Obligatoria",
    },
    {
        id: 2,
        nombre: "Electiva",
    },
    {
        id: 3,
        nombre: "Optativa",
    },
]

const Programas = [
    {
        id: 1,
        nombre: "Ingeniería de Sistemas",
        id_facultad: 1,
    },
    {
        id: 2,
        nombre: "Ingeniería de Software",
        id_facultad: 2,
    },
]

const Facultades = [
    {
        id: 1,
        nombre: "Ingeniería",
        id_sede: 1,
    },
    {
        id: 2,
        nombre: "Ciencias",
        id_sede: 2,
    },
]

const Sedes = [
    {
        id: 1,
        nombre: "Medellín",
    },
    {
        id: 2,
        nombre: "Bogotá",
    },
]

export { Asignaturas, Tipologias, Programas, Facultades, Sedes }