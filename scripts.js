function criarPilha (){
    let elementos = [];

    function adicionar(elemento){
        elementos.push(elemento)
    }

    function pilhaEstaVazia(){
        return elementos.length === 0;
    }

    function tamanho(){
        if(pilhaEstaVazia()){
            return "A pilha está vazia"
        }

        return elementos.length;
    }

    function topoPilha(){
        if(pilhaEstaVazia()) {
            return "A pilha está vazia "
        }
        return elementos[elementos.length - 1 ]
    }

    function basePilha(){
        return elementos[elementos.length - 6 ]
    }

    function removeItem(){
        if(pilhaEstaVazia()){
            return `A pilha está vazia `
        }

        else {
            return elementos.pop()
        }
    }
    function limpar(){
        elementos = []
    }



    return {
        adicionar,
        tamanho,
        pilhaEstaVazia,
        topoPilha,
        basePilha,
        removeItem,
        limpar
    }
   
}


let pilha = criarPilha();

pilha.adicionar(3);
pilha.adicionar(20);
pilha.adicionar(30);
pilha.adicionar(40);
pilha.adicionar(80);
pilha.adicionar(90);

console.log(`O tamanho da pilha é ${pilha.tamanho()}`)
console.log (`o topo da pilha é ${pilha.topoPilha()}`)
console.log(`Removendo o ultimo elemento da pilha: ${pilha.removeItem()}`)
console.log(`O tamanho da pilha é ${pilha.tamanho()}`)
pilha.limpar()
console.log(`O tamanho da pilha é ${pilha.tamanho()}`)
// console.log (`A BASE da pilha é ${pilha.basePilha()}`)


