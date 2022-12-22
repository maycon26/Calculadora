onload = () => {
    var conta = [
        [''],
        ['']
    ];
    var exp = 0;
    var a = 0;
    var sinal;
    var res = document.querySelector('#conta');

    tec.onclick = (evento) => {
        var cont = evento.target.innerText;
        if(cont == '+' || cont == '-' || cont == 'x' || cont == '/'){
            a++;
            sinal = cont;
        }
        else if(cont == '='){
            switch(sinal){
                case '+': exp = parseFloat(conta[0]) + parseFloat(conta[1]); break;
                case '-': exp = conta[0] - conta[1]; break;
                case 'x': exp = conta[0] * conta[1]; break;
                case '/': exp = conta[0] / conta[1]; break;
            }
            res.innerHTML = exp;
            a = 0;
            conta = [
                [''],
                ['']
            ];
        }
        else{
            altera(cont);
        }
    };

    function altera(num) {
        if(num >= 0 && num <= 9){
            if(num == 0 && conta[0] == 0){}
            else if(conta[a].length <= 9){
                conta[a] += num;
                res.innerHTML = conta[a];
            }
        }
        else if(num == '.'){
            conta[a] += num;
            res.innerHTML = conta[a];
        }
        else if(num == 'AC'){
            conta[a] = [''];
            res.innerHTML = '0';
        }
    }

}