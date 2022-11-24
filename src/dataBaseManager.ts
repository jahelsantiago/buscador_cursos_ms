import { SQLDataSource } from "datasource-sql";

const MINUTE = 60 * 1000;

export default class MyDatabase extends SQLDataSource {
  getAsignaturas() {
    return this.knex.select("*").from("Asignatura");
  }

  getAsignatura(codigo_asignatura: number) {
    return this.knex
      .select("*")
      .from("Asignatura")
      .where({ codigo_asignatura });
  }

  getAsignaturasPrograma(id_programa: number) {
    return this.knex.select("*").from("Asignatura").where({ id_programa });
  }

  getTipologias() {
    return this.knex.select("*").from("TipologiaAsignatura");
  }

  getTipologia(id_tipologia: number) {
    return this.knex
      .select("*")
      .from("TipologiaAsignatura")
      .where({ id_tipologia });
  }

  getAsignaturasTipologia(id_tipologia: number) {
    return this.knex.select("*").from("Asignatura").where({ id_tipologia });
  }

  getSedes() {
    return this.knex.select("*").from("Sede");
  }

  getSede(id_sede: number) {
    return this.knex.select("*").from("Sede").where({ id_sede });
  }

  getProgramas() {
    return this.knex.select("*").from("Programa");
  }

  getPrograma(id_programa: number) {
    return this.knex.select("*").from("Programa").where({ id_programa });
  }

  getProgramasFacultad(id_facultad: number) {
    return this.knex.select("*").from("Programa").where({ id_facultad });
  }

  getFacultades() {
    return this.knex.select("*").from("Facultad");
  }

  getFacultad(id_facultad: number) {
    return this.knex.select("*").from("Facultad").where({ id_facultad });
  }


  getPrerequisitos() {
    return this.knex.select("*").from("Prerequisito");
  }

  async getPrerequisito(codigo_asignatura: number) {
    const prerequisitos = await this.knex
      .select("*")
      .from("Prerequisito")
      .where({ codigo_asignatura });
    //get the codes of the prerequisitos
    const codes: Number[] = [];
    prerequisitos.forEach((prerequisito) => {
      codes.push(prerequisito.codigo_asignatura_prerequisito);
    });
    return codes;
  }

  // retorna una lista con las materias que abre una materia
  async getAsignaturasHabilitadas(codigo_asignatura_prerequisito: number) {
    const habilitadas = await this.knex
      .select("*")
      .from("Prerequisito")
      .where({ codigo_asignatura_prerequisito });
    //get the codes of the prerequisitos
    const codes: Number[] = [];
    habilitadas.forEach((habilitada) => {
      codes.push(habilitada.codigo_asignatura);
    });
    return codes;
  }

  async getAsignaturaByPrograma(id_programa: number) {
    return this.knex.select("*").from("Asignatura").where({ id_programa });
  }

  async getFacultadesBySede(id_sede: number) {
    return this.knex.select("*").from("Facultad").where({ id_sede });
  }

  async getProgramasByFacultad(id_facultad: number) {
    return this.knex.select("*").from("Programa").where({ id_facultad });
  }

}

// Language: typescript
// Path: src\MyDatabase.ts
