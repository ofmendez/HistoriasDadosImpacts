import * as views from "./views.js";
import { RandomInt, ñ } from './utils.js';

window.views = views
views.GoTo("home")
let dice  = []

function AddAndReturn(tmpDice) {
    tmpDice.push(RandomInt(9)+1);
    return tmpDice;
}

window.Throw = function () {
    dice = []
    while (dice.length <4) 
        dice = Array.from( new Set( AddAndReturn(dice) ) )
    for (let i = 0; i < dice.length; i++) 
        Animate (ñ('#dice'+i), i) 
}

const Animate = (target, iDice) => {
    target.classList.add('shake')
    let times = 10.0;
    let interval = 1400.0/times;
    for (let index = 1; index < times; index++) 
        setTimeout(() => {target.children[0].src = `/Images/Dados/Dado0${dice[iDice]}_${RandomInt(6)+1}.svg`}, interval*index);
    setTimeout(() => {
        target.children[0].src = `/Images/Dados/Dado0${dice[iDice]}_${RandomInt(6)+1}.svg`
        target.classList.remove('shake')
    }, interval*times);
}