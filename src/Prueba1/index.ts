import { CreditosFactory } from "./creditosFactory.js";
import fs from "fs";
import { creditParameters } from "./types/dbCreditType.js";
import { Credito } from "./classes/credito.js";

// const db = fs
//   .readFileSync(
//     "./db/db.json"
//   )
//   .toString();
const db = fs
  .readFileSync(
    "D:/Dropbox/Rodrigo/Programacion_Compartida/TypeScript/Pruebas/src/db/db.json"
  )
  .toString();


const jsonDb: Array<creditParameters> = JSON.parse(db);


const creditosDisponibles: Array<Credito> =
  CreditosFactory.InstanceCredits(jsonDb);


console.log(creditosDisponibles)





