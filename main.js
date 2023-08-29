let npu = document.querySelector('#npu');
let ndpcal = document.querySelector('#ndpcal');
let opcao = document.getElementById('opcao');
let ptn = document.querySelector('#ptn');
let vet = document.getElementById('vet')


opcao.addEventListener('change', function () {
    
});

function executar() {
    let vetValue = (vet.value && !isNaN(vet.value)) ? parseFloat(vet.value) : 2000;
    console.log("Opção selecionada:", vetValue);

    let opcaoN = parseFloat(opcao.value);
    console.log("Opção selecionada:", opcaoN);
    
    let ptnValue = parseFloat(ptn.value); 
    console.log("Valor PTN:", ptnValue);
    
    let npuValue = ptnValue * opcaoN;
    console.log("Valor NPU:", npuValue);

    let ndpcalValue = (npuValue * 4) * 100 / vetValue; 
    console.log("Valor NDPCal:", ndpcalValue);
    
    npu.placeholder = npuValue.toFixed(2); 
    ndpcal.placeholder = ndpcalValue.toFixed(2) + "%"; 
}
