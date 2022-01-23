import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo Altmann", "3492983493");

const cliente2 = new Cliente("Paloma Altmann", "23443338422");



const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaCorrentePaloma = new ContaCorrente(cliente2, 1001);
contaCorrentePaloma.depositar(50);


console.log(contaCorrenteRicardo)
console.log(contaCorrentePaloma)

contaCorrenteRicardo.tranferir(100, contaCorrentePaloma)

console.log(contaCorrenteRicardo)
console.log(contaCorrentePaloma)
console.log(`Número de contas abertas: ${ContaCorrente.numeroDeContas}`)
