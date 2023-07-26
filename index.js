import { Cliente } from "./conta/Cliente.js"
import { Gerente } from "./funcionario/gerente.js";
import { Diretor } from "./funcionario/diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Rodrygo',10000,12345678)
diretor.cadastrarSenha('123456')
const gerente = new Gerente('Gabriel',5000,987654321)
gerente.cadastrarSenha('1234')

const cliente = new Cliente("Lais", 78945612379, "456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor,'123456')
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,'1234')


const clienteEstaLogado = SistemaAutenticacao.login(cliente, '456');

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);