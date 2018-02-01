var geral = document.getElementById('estado_geral').innerHTML
if (geral === '0') {
    document.getElementById('estado_geral').innerHTML = '1';
    document.getElementById('botao_geral').innerHTML = '<a href=\'/?desligar_geral\' class=\'botao\'>Desliga_geral</a>';
} else {
    document.getElementById('estado_geral').innerHTML = '0';
    document.getElementById('botao_geral').innerHTML = '<a href=\'/?ligar_geral\' class=\'botao\'>Liga_geral</a>';
}

var vent = document.getElementById('estado_vent').innerHTML
if (vent === '0') {
    document.getElementById('estado_vent').innerHTML = '1';
    document.getElementById('botao_vent').innerHTML = '<a href=\'/?desligar_vent\' class=\'botao\'>Desliga_vent</a>';
} else {
    document.getElementById('estado_vent').innerHTML = '0';
    document.getElementById('botao_vent').innerHTML = '<a href=\'/?ligar_vent\' class=\'botao\'>Liga_vent</a>';
}

var exaust = document.getElementById('estado_exaust').innerHTML
if (exaust === '0') {
    document.getElementById('estado_exaust').innerHTML = '1';
    document.getElementById('botao_exaust').innerHTML = '<a href=\'/?desligar_exaust\' class=\'botao\'>Desliga_exaust</a>';
} else {
    document.getElementById('estado_exaust').innerHTML = '0';
    document.getElementById('botao_exaust').innerHTML = '<a href=\'/?ligar_exaust\' class=\'botao\'>Liga_exaust</a>';
}

var min = document.getElementById('estado_min').innerHTML
if (min === '0') {
    document.getElementById('estado_min').innerHTML = '1';
    document.getElementById('botao_min').innerHTML = '<a href=\'/?desligar_min\' class=\'botao\'>Desliga_min</a>';
} else {
    document.getElementById('estado_min').innerHTML = '0';
    document.getElementById('botao_min').innerHTML = '<a href=\'/?ligar_min\' class=\'botao\'>Liga_min</a>';
}

var med = document.getElementById('estado_med').innerHTML
if (med === '0') {
    document.getElementById('estado_med').innerHTML = '1';
    document.getElementById('botao_med').innerHTML = '<a href=\'/?desligar_med\' class=\'botao\'>Desliga_med</a>';
} else {
    document.getElementById('estado_med').innerHTML = '0';
    document.getElementById('botao_med').innerHTML = '<a href=\'/?ligar_med\' class=\'botao\'>Liga_med</a>';
}

var max = document.getElementById('estado_max').innerHTML
if (max === '0') {
    document.getElementById('estado_max').innerHTML = '1';
    document.getElementById('botao_max').innerHTML = '<a href=\'/?desligar_max\' class=\'botao\'>Desliga_max</a>';
} else {
    document.getElementById('estado_max').innerHTML = '0';
    document.getElementById('botao_max').innerHTML = '<a href=\'/?ligar_max\' class=\'botao\'>Liga_max</a>';
}

