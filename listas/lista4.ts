function q1(){
    console.log("Questão 1:")
    const pessoa = {
        nome:"Victor",
        idade:16,
        fazerAniversario(){
            this.idade += 1
        },
        exibirDetalhes(){
            return `Sou o ${this.nome} e tenho ${this.idade} anos`
        }
    }
    pessoa.fazerAniversario()
    const apresentacao = pessoa.exibirDetalhes()
    console.log(apresentacao)
}

function q2(){
    console.log("Questão 2:")
    interface Dimensoes{
        X:number,
        Y:number,
        Z:number,
        exibirDetalhes():void
    }
    interface Porta{
        cor: string,
        aberta: boolean,
        dimensoes: Dimensoes,
        abre():void,
        fecha():void,
        pinta(novaCor: string):void,
        estaAberta():boolean,
        exibirDetalhes():string
    }
    const dimensoesPorta: Dimensoes = {
        X:12,
        Y:13,
        Z:14,
        exibirDetalhes(){
            return `[${this.X},${this.Y},${this.Z}]`
        }
    }
    const porta: Porta = {
        cor:"Azul",
        aberta:false,
        dimensoes: dimensoesPorta,
        abre(){
            this.aberta = true
        },
        fecha(){
            this.aberta = false
        },
        pinta(novaCor: string){
            this.cor = novaCor
        },
        estaAberta(){
            return this.aberta
        },
        exibirDetalhes(){
            return `Cor: ${this.cor}, Dimensões: ${this.dimensoes.exibirDetalhes()}, Aberta: ${this.aberta}`
        }
    }
    porta.abre()
    console.log(porta.estaAberta())
    porta.fecha()
    console.log(porta.estaAberta())
    porta.pinta("Vermelho")
    console.log(`Nova cor da porta: ${porta.cor}`)
    console.log(porta.exibirDetalhes())
}

function q3(){
    console.log("Questão 3:")
    interface Livro{
        titulo:string,
        autor:string,
        anoPublicacao:number,
        genero:string,
        paginaAtual:number,
        avancarPagina():void,
        voltarPagina():void,
        exibirDetalhes():string
    }
    const livro: Livro = {
        titulo:"Viagem a jupiter",
        autor:"Eduardo",
        anoPublicacao:2026,
        genero:"Ficçaõ cientifica",
        paginaAtual:1,
        avancarPagina(){
            this.paginaAtual += 1
        },
        voltarPagina(){
            if(this.paginaAtual === 1){
                console.log("Você está na primeira página, não é possível voltar mais uma!")
                return 
            }
            this.paginaAtual -= 1
        },
        exibirDetalhes(){
            return `Titulo: ${this.titulo}\n` +
            `Autor: ${this.autor}\n` +
            `Ano de Publicação: ${this.anoPublicacao}\n` +
            `Gênero: ${this.genero}\n` +
            `Página Atual: ${this.paginaAtual}`
        }
    }
    livro.avancarPagina()
    console.log(livro.paginaAtual)
    livro.voltarPagina()
    console.log(livro.paginaAtual)
    livro.voltarPagina()
    console.log(livro.paginaAtual)
    console.log(livro.exibirDetalhes())
}

function q4(){
    console.log("Questão 4:")
    interface Animal{
        nome:string,
        especie:string,
        idade:number,
        emitirSom(som:String):void,
        envelhecer():void,
        exibirDetalhes():void
    }
    const animal:Animal = {
        nome:"Bob",
        especie:"Cachorro",
        idade:4,
        emitirSom: (som:string) => console.log(som),
        envelhecer(){
            this.idade += 1
        },
        exibirDetalhes(){
            return `Nome: ${this.nome}, Espécie: ${this.especie}, Idade: ${this.idade}`
        }
    }
    animal.emitirSom("Au au")
    console.log(animal.idade)
    animal.envelhecer()
    console.log(animal.idade)
    console.log(animal.exibirDetalhes())
}

function q5(){
    console.log("Questão 5:")
    interface Playlist{
        nome:string,
        autor:string,
        musicas:Array<string>,
        adicionarMusica(novaMusica: string):void,
        removerMusica(musica: string):void,
        listarMusicas():void,
        quantidadeDeMusicas():number
    }
    const playlist:Playlist = {
        nome:"Minha playlist",
        autor:"Victor",
        musicas: ["M1","M2","M3"],
        adicionarMusica(novaMusica: string){
            this.musicas.push(novaMusica)
        },
        removerMusica(musica: string){
            const indiceMusica = this.musicas.indexOf(musica)
            this.musicas.splice(indiceMusica,1)
        },
        listarMusicas(){
            for(let musica of this.musicas){
                console.log(musica)
            }
        },
        quantidadeDeMusicas(){
            return this.musicas.length
        }
    }
    console.log(playlist.musicas)
    playlist.adicionarMusica("M4")
    console.log(playlist.musicas)
    playlist.removerMusica("M2")
    console.log(playlist.musicas)
    console.log(playlist.quantidadeDeMusicas())
    playlist.listarMusicas()
}

function q6(){
    console.log("Questão 6:")
    interface Produto{
        nome:string,
        preco:number,
        quantidade:number,
        aumentarQuantidade():void,
        diminuirQuantidade():void,
        atualizarPreco(precoNovo: number):void,
        exibirInformacoes():string
    }
    const p: Produto = {
        nome:"Mouse",
        preco:200,
        quantidade:1,
        aumentarQuantidade(){
            this.quantidade += 1
        },
        diminuirQuantidade(){
            if(this.quantidade === 0){
                console.log("O produto já chegou a 0 no estoque")
                return 
            }
            this.quantidade -= 1
        },
        atualizarPreco(novoPreco: number){
            if(novoPreco < 0){
                console.log("O preço do produto não pode ser negativo!")
                return
            }
            this.preco = novoPreco
        },
        exibirInformacoes(){
            return `Nome: ${this.nome}, Preço: ${this.preco}, Quantidade: ${this.quantidade}`
        }
    }
    console.log(p.quantidade)
    p.diminuirQuantidade()
    console.log(p.quantidade)
    p.diminuirQuantidade()
    p.aumentarQuantidade()
    console.log(p.quantidade)
    console.log(p.preco)
    p.atualizarPreco(-1)
    p.atualizarPreco(2)
    console.log(p.preco)
    console.log(p.exibirInformacoes())
}

function executarTodasAsQuestoes(){
    const questoes = [q1,q2,q3,q4,q5,q6]
    for(let q of questoes){
        q()
        console.log()
    }
}

executarTodasAsQuestoes()

export {}