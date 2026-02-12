function q1(){
    console.log("Questão 1)")
    interface Aluno{
        nome: string,
        idade: number,
        ativo: boolean
    }
    const aluno: Aluno = {
        nome:"Victor",
        idade:16,
        ativo:true
    }
    console.log(`Nome do aluno: ${aluno.nome}`)
    aluno.ativo = false
    console.log(aluno)
}

function q2(){
    console.log("Questão 2)")
    type Turma = {alunos:Array<string>}
    const turma: Turma = {
        alunos: []
    }
    turma.alunos.push("Victor","Bruno","Pedro")
    console.log(`Alunos da turma: ${turma.alunos}`)
    console.log(`Quantidade de alunos: ${turma.alunos.length}`)
}

function q3(){
    console.log("Questão 3)")
    interface Registro{
        presente: boolean,
        "horário entrada": string
    }
    var registro: Registro = {
        presente: true,
        "horário entrada": "07:30"
    }
    const presente: boolean = registro.presente
    const horario_entrada: string = registro["horário entrada"]
    console.log(`Presente: ${presente}`)
    console.log(`Horário de entrada: ${horario_entrada}`)
}

function q4(){
    console.log(`Questão 4)`)
    interface Pessoa{
        nome: string,
        idade: number,
        apresentar(): void
    }
    const pessoa: Pessoa = {
        nome:"Victor",
        idade:16,
        apresentar(){
            console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
        }
    }
    pessoa.apresentar()
}

function q5(){
    console.log(`Questão 5)`)
    interface Produto{
        nome: string,
        preco?: number,
        emEstoque?: boolean,
    }
    const produto: Produto = {
        nome:"lapis",
        preco:1
    }
    produto.emEstoque = true
    delete produto.preco
    console.log(`Preço${Object.keys(produto).includes("preco") ? "":" não"} está no produto`)
    console.log(produto)
}

function q6(){
    console.log("Questão 6)")
    interface Animal{
        nome: string,
        raca: string,
        [key:string]: any
    }
    function adicionarPropriedade(obj: Animal, chave: string, valor: any): Animal{
        obj[chave] = valor
        return obj
    }
    let animal: Animal = {
        nome:"Bob",
        raca:"Pastor alemão"
    }
    const animal_com_idade: Animal = adicionarPropriedade(animal,"idade",16)
    console.log(animal_com_idade)
    console.log(`Idade do animal: ${animal_com_idade.idade}`)
}

interface Registro{
    atividades: Array<string>,
    presente: boolean
}

function q7(){
    console.log("Questão 7)")
    const registroDiario: Registro = {
        atividades: [],
        presente: true
    }
    registroDiario.atividades.push("comprar comida","correr","estudar")
    registroDiario.presente = !registroDiario.presente
    console.log(registroDiario)
}

function q8(){
    console.log("Questão 8)")
    const registro1: Registro = {
        atividades: ["correr","estudar"],
        presente: true
    }
    const registro2: Registro = {
        atividades: [],
        presente: false
    }
    let registros: Array<Registro> = [registro1,registro2]
    console.log(`Atividades do primeiro registro: ${registros[0].atividades}`)
    console.log(`Segundo registro presente: ${registros[1].presente}`)
}

function executarTodasAsQuestoes(){
    const questoes: Array<Function>= [q1,q2,q3,q4,q5,q6,q7,q8]
    for(let questao of questoes){
        questao()
        console.log()
    }
}

executarTodasAsQuestoes()
