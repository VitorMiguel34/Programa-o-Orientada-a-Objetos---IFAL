function q1(){
    class Carrinho {

        public itens: Array<string>
        constructor() {
            this.itens = [];
        }
        adicionarItem(item: string) {
            this.itens.push(item)
        }
    }

    let carro = new Carrinho()
    carro.adicionarItem("Volante")
    carro.adicionarItem("marcha")
    console.log(carro.itens)
}

function q2(){
    class Carrinho {

        public itens: Array<string>
        constructor() {
            this.itens = [];
        }

        adicionarItem(itemNovo: string){
            this.itens.push(itemNovo)
            console.log(`Item ${itemNovo} adicionado aos itens do carro`)
        }

        removerItem(itemNome: string) {
            let index = this.itens.indexOf(itemNome);
            if (index !== -1){
                this.itens.splice(index, 1);
                console.log(`Item removido: ${itemNome}`)
            }
            else{
                console.log(`Não encontramos ${itemNome} nos itens do carro!`)
            }
        }
    }

    let carro = new Carrinho()
    carro.adicionarItem("volante")
    carro.adicionarItem("marcha")
    carro.removerItem("volante")
    carro.removerItem("rodas")
}

function q3(){
    class Empresa {

        public salarios_funcionarios: Array<number>
        constructor(salariosFuncionarios: Array<number>) {
            this.salarios_funcionarios = salariosFuncionarios
        }
        getSalarioTotal() {
            let somaSalarios: number = 0
            for(let salario of this.salarios_funcionarios){
                somaSalarios += salario
            }
            return somaSalarios
        }
    }

    const empresa = new Empresa([10,20,30,40,50,60,70,80,90,100])
    const salarioTotal = empresa.getSalarioTotal()
    console.log(`Valor total pago em salários pela empresa: ${salarioTotal}`)
}

function q4(){
    class Funcionario{

        public nome: String
        public salario: Number
        public departamento: String

        constructor(nome: String, salario: Number, departamento: String){
            this.nome = nome
            this.salario = salario
            this.departamento = departamento
        }
    }

    class Empresa {

        public funcionarios: Array<Funcionario>
        constructor(funcionarios: Array<Funcionario>) {
            this.funcionarios = funcionarios
        }
        getFuncionario(nome: string) {
            let usuario = this.funcionarios.find(f => f.nome === nome)
            if(usuario) return usuario
            throw Error("Não existe um usuário com esse nome")
        }
    }

    const f1 = new Funcionario("Victor",1000,"TI")
    const f2 = new Funcionario("João",1000,"TI")
    const f3 = new Funcionario("Maria",1000,"TI")
    const empresa = new Empresa([f1,f2,f3])
    for(let nome of ["Victor","João","Gabriel"]){
        try{
            console.log(empresa.getFuncionario(nome))
        }
        catch(error){
            console.log(`Usuário não encontrado!`)
        }
    }
}

function q5(){
    class Biblioteca{

        public livros: Array<String>
        constructor(){
            this.livros = []
        }

        adicionarLivro(novoLivro: String){
            this.livros.push(novoLivro)
            console.log(`Livro "${novoLivro}" foi adicionado`)
        }

        removerLivro(livro: String){
            let idLivro = this.livros.indexOf(livro)
            if(idLivro !== 1){
                console.log(`Livro "${livro}" não encontrado`)
                return
            }
            this.livros.splice(idLivro, 1)
            console.log(`Livro "${livro}" removido`)
        }
    }

    const biblioteca = new Biblioteca()
    biblioteca.adicionarLivro("X")
    biblioteca.adicionarLivro("Y")
    biblioteca.removerLivro("Y")
    biblioteca.removerLivro("Z")
}

function q6(){
    class Pessoa{

        public nome: String 
        public idade: number 


        constructor(nome: String, idade: number){
            this.nome = nome
            this.idade = idade
        }

        getDescricao(){
            return `Meu nome é ${this.nome} e eu tenho ${this.idade} anos`
        }
    }

    const p = new Pessoa("Victor",16)
    console.log(p.getDescricao())
}

function q7(){
    class Funcionario{

        public nome: String
        public salario: number
        constructor(nome: String, salario: number){
            this.nome = nome
            this.salario = salario
        }

        calcularBonus(porcentagem: number){
            if(porcentagem < 9 || porcentagem > 1000){
                console.log(`${porcentagem}% não é uma porcentagem válida`)
                return 0
            }
            const bonus = this.salario*porcentagem/100
            console.log("Bônus calculado com sucesso!")
            return bonus
        }
    }

    const f = new Funcionario("Victor",1000)
    let b1 = f.calcularBonus(1)
    let b2 = f.calcularBonus(1001)
    let b3 = f.calcularBonus(10)
    console.log(`Bônus de 1%: ${b1}`)
    console.log(`Bônus de 1001%: ${b2}`)
    console.log(`Bônus de 10%: ${b3}`)
}

function executarQuestoes(){
    let qs = [q1,q2,q3,q4,q5,q6,q7]
    for(let i in qs){
        console.log(`Questão ${parseInt(i)+1}:`)
        qs[i]()
        console.log()
    }
}

executarQuestoes()