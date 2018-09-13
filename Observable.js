class Observable{

    constructor(){
        // Array de observadores que serão notificados com a mudança dos dados
        this.observers = [];
    }

    subscribe(Observador){
        //Adiciona a função de notificação do Observador
        this.observers.push(Observador);
    }

    unsubscribe(Observador){
        //Cria um novo arrai de observadores
        let observadores = [];
        for(let i =0;i<this.observers.length;i++){
            //Procura os observadores a não serem removidos
            if(this.observers[i] != Observador){
                //Adiciona os observadores que ainda devem ficar no array
                observadores.push(this.observers[i])
            }
        }
        // Atualiza o array de observadores
        this.observers = observadores;
    }

    notify(valor){
        //Loop por todos os observadores
        for(let i =0;i<this.observers.length;i++){
            //Chama a função de notificar cada um
            this.observers[i](valor);
        }
    }
}