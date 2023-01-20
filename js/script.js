function pontuação() {
    const campoTexto = document.querySelector('#pontos')
    console.log(campoTexto)
}

changeFlags = (event) => {
    if (event.target.value === 'EQU') {
        if (document.getElementById('home').src.indexOf('') != -1) {
            document.getElementById('home').src = './images/icon-ecuador.svg'
            saveO1Home('home', './images/icon-ecuador.svg', 'EQU')
        }
    } else if (event.target.value === 'HOL') {
        if (document.getElementById('home').src.indexOf('') != -1) {
            document.getElementById('home').src = './images/icon-netherlands.svg'
            saveO1Home('home', './images/icon-netherlands.svg', 'HOL')
        }
    } else if (event.target.value === 'QAT') {
        if (document.getElementById('home').src.indexOf('') != -1) {
            document.getElementById('home').src = './images/icon-qatar.svg'
            saveO1Home('home', './images/icon-qatar.svg', 'QAT')
        }
    } else if (event.target.value === 'SEN') {
        if (document.getElementById('home').src.indexOf('') != -1) {
            document.getElementById('home').src = './images/icon-senegal.svg'
            saveO1Home('home', './images/icon-senegal.svg', 'SEN')
        }
    } else if (event.target.value === 'ING') {
        if (document.getElementById('away').src.indexOf('') != -1) {
            document.getElementById('away').src = './images/icon-england.svg'
            saveO1Away('away', './images/icon-england.svg', 'ING')
        }
    } else if (event.target.value === 'IRA') {
        if (document.getElementById('away').src.indexOf('') != -1) {
            document.getElementById('away').src = './images/icon-iran.svg'
            saveO1Away('away', './images/icon-iran.svg', 'IRA')
        }
    } else if (event.target.value === 'EUA') {
        if (document.getElementById('away').src.indexOf('') != -1) {
            document.getElementById('away').src = './images/icon-united-states.svg'
            saveO1Away('away', './images/icon-united-states.svg', 'EUA')
        }
    } else if (event.target.value === 'GAL') {
        if (document.getElementById('away').src.indexOf('') != -1) {
            document.getElementById('away').src = './images/icon-wales.svg'
            saveO1Away('away', './images/icon-wales.svg', 'GAL')
        }
    } else if (event.target.value === 'ARG') {
        if (document.getElementById('homeo2').src.indexOf('') != -1) {
            document.getElementById('homeo2').src = './images/icon-argentina.svg'
            saveO2Home('homeo2', './images/icon-argentina.svg', 'ARG')
        }
    } else if (event.target.value === 'MEX') {
        if (document.getElementById('homeo2').src.indexOf('') != -1) {
            document.getElementById('homeo2').src = './images/icon-mexico.svg'
            saveO2Home('homeo2', './images/icon-mexico.svg', 'MEX')
        }
    } else if (event.target.value === 'POL') {
        if (document.getElementById('homeo2').src.indexOf('') != -1) {
            document.getElementById('homeo2').src = './images/icon-poland.svg'
            saveO2Home('homeo2', './images/icon-poland.svg', 'POL')
        }
    } else if (event.target.value === 'ARA') {
        if (document.getElementById('homeo2').src.indexOf('') != -1) {
            document.getElementById('homeo2').src = './images/icon-saudi-arabia.svg'
            saveO2Home('homeo2', './images/icon-saudi-arabia.svg', 'ARA')
        }
    } else if (event.target.value === 'AUS') {
        if (document.getElementById('awayo2').src.indexOf('') != -1) {
            document.getElementById('awayo2').src = './images/icon-australia.svg'
            saveO2Away('awayo2', './images/icon-australia.svg', 'AUS')
        }
    } else if (event.target.value === 'DIN') {
        if (document.getElementById('awayo2').src.indexOf('') != -1) {
            document.getElementById('awayo2').src = './images/icon-denmark.svg'
            saveO2Away('awayo2', './images/icon-denmark.svg', 'IRA')
        }
    } else if (event.target.value === 'FRA') {
        if (document.getElementById('awayo2').src.indexOf('') != -1) {
            document.getElementById('awayo2').src = './images/icon-france.svg'
            saveO2Away('awayo2', './images/icon-france.svg', 'FRA')
        }
    } else if (event.target.value === 'TUN') {
        if (document.getElementById('awayo2').src.indexOf('') != -1) {
            document.getElementById('awayo2').src = './images/icon-tunisia.svg'
            saveO2Away('awayo2', './images/icon-tunisia.svg', 'TUN')
        }
    } else if (event.target.value === 'CRC') {
        if (document.getElementById('homeo3').src.indexOf('') != -1) {
            document.getElementById('homeo3').src = './images/icon-costa-rica.svg'
            saveO3Home('homeo3', './images/icon-costa-rica.svg', 'CRC')
        }
    } else if (event.target.value === 'ALE') {
        if (document.getElementById('homeo3').src.indexOf('') != -1) {
            document.getElementById('homeo3').src = './images/icon-germany.svg'
            saveO3Home('homeo3', './images/icon-germany.svg', 'ALE')
        }
    } else if (event.target.value === 'JAP') {
        if (document.getElementById('homeo3').src.indexOf('') != -1) {
            document.getElementById('homeo3').src = './images/icon-japan.svg'
            saveO3Home('homeo3', './images/icon-japan.svg', 'JAP')
        }
    } else if (event.target.value === 'ESP') {
        if (document.getElementById('homeo3').src.indexOf('') != -1) {
            document.getElementById('homeo3').src = './images/icon-spain.svg'
            saveO3Home('homeo3', './images/icon-spain.svg', 'ESP')
        }
    } else if (event.target.value === 'BEL') {
        if (document.getElementById('awayo3').src.indexOf('') != -1) {
            document.getElementById('awayo3').src = './images/icon-belgium.svg'
            saveO3Away('awayo3', './images/icon-belgium.svg', 'BEL')
        }
    } else if (event.target.value === 'CAN') {
        if (document.getElementById('awayo3').src.indexOf('') != -1) {
            document.getElementById('awayo3').src = './images/icon-canada.svg'
            saveO3Away('awayo3', './images/icon-canada.svg', 'CAN')
        }
    } else if (event.target.value === 'CRO') {
        if (document.getElementById('awayo3').src.indexOf('') != -1) {
            document.getElementById('awayo3').src = './images/icon-croatia.svg'
            saveO3Away('awayo3', './images/icon-croatia.svg', 'CRO')
        }
    } else if (event.target.value === 'MAR') {
        if (document.getElementById('awayo3').src.indexOf('') != -1) {
            document.getElementById('awayo3').src = './images/icon-morocco.svg'
            saveO3Away('awayo3', './images/icon-morocco.svg', 'MAR')
        }
    } else if (event.target.value === 'BRA') {
        if (document.getElementById('homeo4').src.indexOf('') != -1) {
            document.getElementById('homeo4').src = './images/icon-brazil.svg'
            document.getElementsByClassName("placar")[27].className = "placar-br";
            document.getElementsByClassName("j-1")[75].className = "j-br";
            document.getElementsByClassName("classificados")[6].className = "classificados-br";
            document.getElementsByClassName("classificados")[6].className = "classificados-br";
            saveO4Home('homeo4', './images/icon-brazil.svg', 'BRA')
        }
    } else if (event.target.value === 'CAM') {
        if (document.getElementById('homeo4').src.indexOf('') != -1) {
            document.getElementById('homeo4').src = './images/icon-cameroon.svg'
            saveO4Home('homeo4', './images/icon-cameroon.svg', 'CAM')
        }
    } else if (event.target.value === 'SER') {
        if (document.getElementById('homeo4').src.indexOf('') != -1) {
            document.getElementById('homeo4').src = './images/icon-serbia.svg'
            saveO4Home('homeo4', './images/icon-serbia.svg', 'SER')
        }
    } else if (event.target.value === 'SUI') {
        if (document.getElementById('homeo4').src.indexOf('') != -1) {
            document.getElementById('homeo4').src = './images/icon-switzerland.svg'
            saveO4Home('homeo4', './images/icon-switzerland.svg', 'SUI')
        }
    } else if (event.target.value === 'GAN') {
        if (document.getElementById('awayo4').src.indexOf('') != -1) {
            document.getElementById('awayo4').src = './images/icon-ghana.svg'
            saveO4Away('awayo4', './images/icon-ghana.svg', 'GAN')
        }
    } else if (event.target.value === 'COR') {
        if (document.getElementById('awayo4').src.indexOf('') != -1) {
            document.getElementById('awayo4').src = './images/icon-south-korea.svg'
            saveO4Away('awayo4', './images/icon-south-korea.svg', 'COR')
        }
    } else if (event.target.value === 'POR') {
        if (document.getElementById('awayo4').src.indexOf('') != -1) {
            document.getElementById('awayo4').src = './images/icon-portugal.svg'
            saveO4Away('awayo4', './images/icon-portugal.svg', 'POR')
        }
    } else if (event.target.value === 'URU') {
        if (document.getElementById('awayo4').src.indexOf('') != -1) {
            document.getElementById('awayo4').src = './images/icon-uruguay.svg'
            saveO4Away('awayo4', './images/icon-uruguay.svg', 'URU')
        }
    }
}
changeFlags2 = (event) => {
    if (event.target.value === 'EQU') {
        if (document.getElementById('awayo5').src.indexOf('') != -1) {
            document.getElementById('awayo5').src = './images/icon-ecuador.svg'
            saveO5Away('awayo5', './images/icon-ecuador.svg', 'EQU')
        }
    } else if (event.target.value === 'HOL') {
        if (document.getElementById('awayo5').src.indexOf('') != -1) {
            document.getElementById('awayo5').src = './images/icon-netherlands.svg'
            saveO5Away('awayo5', './images/icon-netherlands.svg', 'HOL')
        }
    } else if (event.target.value === 'QAT') {
        if (document.getElementById('awayo5').src.indexOf('') != -1) {
            document.getElementById('awayo5').src = './images/icon-qatar.svg'
            saveO5Away('awayo5', './images/icon-qatar.svg', 'QAT')
        }
    } else if (event.target.value === 'SEN') {
        if (document.getElementById('awayo5').src.indexOf('') != -1) {
            document.getElementById('awayo5').src = './images/icon-senegal.svg'
            saveO5Away('awayo5', './images/icon-senegal.svg', 'SEN')
        }
    } else if (event.target.value === 'ING') {
        if (document.getElementById('homeo5').src.indexOf('') != -1) {
            document.getElementById('homeo5').src = './images/icon-england.svg'
            saveO5Home('homeo5', './images/icon-england.svg', 'ING')
        }
    } else if (event.target.value === 'IRA') {
        if (document.getElementById('homeo5').src.indexOf('') != -1) {
            document.getElementById('homeo5').src = './images/icon-iran.svg'
            saveO5Home('homeo5', './images/icon-iran.svg', 'IRA')
        }
    } else if (event.target.value === 'EUA') {
        if (document.getElementById('homeo5').src.indexOf('') != -1) {
            document.getElementById('homeo5').src = './images/icon-united-states.svg'
            saveO5Home('homeo5', './images/icon-united-states.svg', 'EUA')
        }
    } else if (event.target.value === 'GAL') {
        if (document.getElementById('homeo5').src.indexOf('') != -1) {
            document.getElementById('homeo5').src = './images/icon-wales.svg'
            saveO5Home('homeo5', './images/icon-wales.svg', 'GAL')
        }
    } else if (event.target.value === 'ARG') {
        if (document.getElementById('awayo6').src.indexOf('') != -1) {
            document.getElementById('awayo6').src = './images/icon-argentina.svg'
            saveO6Away('awayo6', './images/icon-argentina.svg', 'ARG')
        }
    } else if (event.target.value === 'MEX') {
        if (document.getElementById('awayo6').src.indexOf('') != -1) {
            document.getElementById('awayo6').src = './images/icon-mexico.svg'
            saveO6Away('awayo6', './images/icon-mexico.svg', 'MEX')
        }
    } else if (event.target.value === 'POL') {
        if (document.getElementById('awayo6').src.indexOf('') != -1) {
            document.getElementById('awayo6').src = './images/icon-poland.svg'
            saveO6Away('awayo6', './images/icon-poland.svg', 'POL')
        }
    } else if (event.target.value === 'ARA') {
        if (document.getElementById('awayo6').src.indexOf('') != -1) {
            document.getElementById('awayo6').src = './images/icon-saudi-arabia.svg'
            saveO6Away('awayo6', './images/icon-saudi-arabia.svg', 'ARA')
        }
    } else if (event.target.value === 'AUS') {
        if (document.getElementById('homeo6').src.indexOf('') != -1) {
            document.getElementById('homeo6').src = './images/icon-australia.svg'
            saveO6Home('homeo6', './images/icon-australia.svg', 'AUS')
        }
    } else if (event.target.value === 'DIN') {
        if (document.getElementById('homeo6').src.indexOf('') != -1) {
            document.getElementById('homeo6').src = './images/icon-denmark.svg'
            saveO6Home('homeo6', './images/icon-denmark.svg', 'IRA')
        }
    } else if (event.target.value === 'FRA') {
        if (document.getElementById('homeo6').src.indexOf('') != -1) {
            document.getElementById('homeo6').src = './images/icon-france.svg'
            saveO6Home('homeo6', './images/icon-france.svg', 'FRA')
        }
    } else if (event.target.value === 'TUN') {
        if (document.getElementById('homeo6').src.indexOf('') != -1) {
            document.getElementById('homeo6').src = './images/icon-tunisia.svg'
            saveO6Home('homeo6', './images/icon-tunisia.svg', 'TUN')
        }
    } else if (event.target.value === 'CRC') {
        if (document.getElementById('awayo7').src.indexOf('') != -1) {
            document.getElementById('awayo7').src = './images/icon-costa-rica.svg.svg'
            saveO7Away('awayo7', './images/icon-costa-rica.svg', 'CRC')
        }
    } else if (event.target.value === 'ALE') {
        if (document.getElementById('awayo7').src.indexOf('') != -1) {
            document.getElementById('awayo7').src = './images/icon-germany.svg'
            saveO7Away('awayo7', './images/icon-germany.svg', 'ALE')
        }
    } else if (event.target.value === 'JAP') {
        if (document.getElementById('awayo7').src.indexOf('') != -1) {
            document.getElementById('awayo7').src = './images/iicon-japan.svg'
            saveO7Away('awayo7', './images/icon-japan.svg', 'JAP')
        }
    } else if (event.target.value === 'ESP') {
        if (document.getElementById('awayo7').src.indexOf('') != -1) {
            document.getElementById('awayo7').src = './images/icon-spain.svg'
            saveO7Away('awayo7', './images/icon-spain.svg', 'ESP')
        }
    } else if (event.target.value === 'BEL') {
        if (document.getElementById('homeo7').src.indexOf('') != -1) {
            document.getElementById('homeo7').src = './images/icon-belgium.svg'
            saveO7Home('homeo7', './images/icon-belgium.svg', 'BEL')
        }
    } else if (event.target.value === 'CAN') {
        if (document.getElementById('homeo7').src.indexOf('') != -1) {
            document.getElementById('homeo7').src = './images/icon-canada.svg'
            saveO7Home('homeo7', './images/icon-canada.svg', 'CAN')
        }
    } else if (event.target.value === 'CRO') {
        if (document.getElementById('homeo7').src.indexOf('') != -1) {
            document.getElementById('homeo7').src = './images/icon-croatia.svg'
            saveO7Home('homeo7', './images/icon-croatia.svg', 'CRO')
        }
    } else if (event.target.value === 'MAR') {
        if (document.getElementById('homeo7').src.indexOf('') != -1) {
            document.getElementById('homeo7').src = './images/icon-morocco.svg'
            saveO7Home('homeo7', './images/icon-morocco.svg', 'MAR')
        }
    } else if (event.target.value === 'BRA') {
        if (document.getElementById('awayo8').src.indexOf('') != -1) {
            document.getElementById('awayo8').src = './images/icon-brazil.svg'
            saveO8Away('awayo8', './images/icon-brazil.svg', 'ARG')
        }
    } else if (event.target.value === 'CAM') {
        if (document.getElementById('awayo8').src.indexOf('') != -1) {
            document.getElementById('awayo8').src = './images/icon-cameroon.svg'
            saveO8Away('awayo8', './images/icon-cameroon.svg', 'CAM')
        }
    } else if (event.target.value === 'SER') {
        if (document.getElementById('awayo8').src.indexOf('') != -1) {
            document.getElementById('awayo8').src = './images/icon-serbia.svg'
            saveO8Away('awayo8', './images/icon-serbia.svg', 'SER')
        }
    } else if (event.target.value === 'SUI') {
        if (document.getElementById('awayo8').src.indexOf('') != -1) {
            document.getElementById('awayo8').src = './images/icon-switzerland.svg'
            saveO8Away('awayo8', './images/icon-switzerland.svg', 'SUI')
        }
    } else if (event.target.value === 'GAN') {
        if (document.getElementById('homeo8').src.indexOf('') != -1) {
            document.getElementById('homeo8').src = './images/icon-ghana.svg'
            saveO8Home('homeo8', './images/icon-ghana.svg', 'GAN')
        }
    } else if (event.target.value === 'COR') {
        if (document.getElementById('homeo8').src.indexOf('') != -1) {
            document.getElementById('homeo8').src = './images/icon-south-korea.svg'
            saveO8Home('homeo8', './images/icon-south-korea.svg', 'COR')
        }
    } else if (event.target.value === 'POR') {
        if (document.getElementById('homeo8').src.indexOf('') != -1) {
            document.getElementById('homeo8').src = './images/icon-portugal.svg'
            saveO8Home('homeo8', './images/icon-portugal.svg', 'POR')
        }
    } else if (event.target.value === 'URU') {
        if (document.getElementById('homeo8').src.indexOf('') != -1) {
            document.getElementById('homeo8').src = './images/icon-uruguay.svg'
            saveO8Home('homeo8', './images/icon-uruguay.svg', 'URU')
        }
    }
}


changeQuartas = (event) => {

    if (event.target.value === 'EUA') {
        if (document.getElementById('homeq1').src.indexOf('') != -1) {
            document.getElementById('homeq1').src = './images/icon-united-states.svg'
            event.innerHTML = 'EUA'
            saveQ1Home('homeq1', './images/icon-united-states.svg', 'EUA')
        }

    } else if (event.target.value === 'HOL') {
        if (document.getElementById('homeq1').src.indexOf('') != -1) {
            document.getElementById('homeq1').src = './images/icon-netherlands.svg'
            event.innerHTML = 'HOL'
            saveQ1Home('homeq1', './images/icon-netherlands.svg', 'HOL')
        }
    } else if (event.target.value === 'AUS') {
        if (document.getElementById('awayq1').src.indexOf('') != -1) {
            document.getElementById('awayq1').src = './images/icon-australia.svg'
            event.innerHTML = 'AUS'
            saveQ1Away('awayq1', './images/icon-australia.svg', 'AUS')
        }
    } else if (event.target.value === 'ARG') {
        if (document.getElementById('awayq1').src.indexOf('') != -1) {
            document.getElementById('awayq1').src = './images/icon-argentina.svg'
            event.innerHTML = 'ARG'
            saveQ1Away('awayq1', './images/icon-argentina.svg', 'ARG')
        }
    } else if (event.target.value === 'CRO') {
        if (document.getElementById('homeq2').src.indexOf('') != -1) {
            document.getElementById('homeq2').src = './images/icon-croatia.svg'
            saveQ2Home('homeq2', './images/icon-croatia.svg', 'CRO')
        }
    } else if (event.target.value === 'JAP') {
        if (document.getElementById('homeq2').src.indexOf('') != -1) {
            document.getElementById('homeq2').src = './images/icon-japan.svg'
            saveQ2Home('homeq2', './images/icon-japan.svg', 'JAP')
        }

    } else if (event.target.value === 'COR') {
        if (document.getElementById('awayq2').src.indexOf('') != -1) {
            document.getElementById('awayq2').src = './images/icon-south-korea.svg'
            saveQ2Away('awayq2', './images/icon-south-korea.svg', 'COR')
        }

    } else if (event.target.value === 'BRA') {
        if (document.getElementById('awayq2').src.indexOf('') != -1) {
            document.getElementById('awayq2').src = './images/icon-brazil.svg'
            document.getElementsByClassName("placar")[32].className = "placar-br";
            document.getElementsByClassName("j-1")[80].className = "j-br";
            document.getElementsByClassName("classificados")[15].className = "classificados-br";
            document.getElementsByClassName("classificados")[15].className = "classificados-br";
            saveQ2Away('awayq2', './images/icon-brazil.svg', 'BRA')
        }
    }
}
changeQuartas2 = (event) => {
    if (event.target.value === 'ING') {
        if (document.getElementById('homeq3').src.indexOf('') != -1) {
            document.getElementById('homeq3').src = './images/icon-england.svg'
            saveQ3Home('homeq3', './images/icon-england.svg', 'ING')
        }
    } else if (event.target.value === 'SEN') {
        if (document.getElementById('homeq3').src.indexOf('') != -1) {
            document.getElementById('homeq3').src = './images/icon-senegal.svg'
            saveQ3Home('homeq3', './images/icon-senegal.svg', 'SEN')
        }
    } else if (event.target.value === 'FRA') {
        if (document.getElementById('awayq3').src.indexOf('') != -1) {
            document.getElementById('awayq3').src = './images/icon-france.svg'
            saveQ3Away('awayq3', './images/icon-france.svg', 'FRA')
        }
    } else if (event.target.value === 'POL') {
        if (document.getElementById('awayq3').src.indexOf('') != -1) {
            document.getElementById('awayq3').src = './images/icon-poland.svg'
            saveQ3Away('awayq3', './images/icon-poland.svg', 'POL')
        }
    } else if (event.target.value === 'MAR') {
        if (document.getElementById('homeq4').src.indexOf('') != -1) {
            document.getElementById('homeq4').src = './images/icon-morocco.svg'
            saveQ4Home('homeq4', './images/icon-morocco.svg', 'MAR')
        }
    } else if (event.target.value === 'ESP') {
        if (document.getElementById('homeq4').src.indexOf('') != -1) {
            document.getElementById('homeq4').src = './images/icon-spain.svg'
            saveQ4Home('homeq4', './images/icon-spain.svg', 'ESP')
        }
    } else if (event.target.value === 'POR') {
        if (document.getElementById('awayq4').src.indexOf('') != -1) {
            document.getElementById('awayq4').src = './images/icon-portugal.svg'
            saveQ4Away('awayq4', './images/icon-portugal.svg', 'POR')
        }
    } else if (event.target.value === 'SUI') {
        if (document.getElementById('awayq4').src.indexOf('') != -1) {
            document.getElementById('awayq4').src = './images/icon-switzerland.svg'
            saveQ4Away('awayq4', './images/icon-switzerland.svg', 'SUI')
        }
    }

}


changeSemi1 = (event) => {
    if (event.target.value === 'EUA') {
        if (document.getElementById('homes1').src.indexOf('') != -1) {
            document.getElementById('homes1').src = './images/icon-united-states.svg'
            saveS1Home('homes1', './images/icon-united-states.svg', 'EUA')

        }
    } else if (event.target.value === 'HOL') {
        if (document.getElementById('homes1').src.indexOf('') != -1) {
            document.getElementById('homes1').src = './images/icon-netherlands.svg'
            saveS1Home('homes1', './images/icon-netherlands.svg', 'HOL')
        }
    } else if (event.target.value === 'AUS') {
        if (document.getElementById('homes1').src.indexOf('') != -1) {
            document.getElementById('homes1').src = './images/icon-australia.svg'
            saveS1Home('homes1', './images/icon-australia.svg', 'AUS')
        }
    } else if (event.target.value === 'ARG') {
        if (document.getElementById('homes1').src.indexOf('') != -1) {
            document.getElementById('homes1').src = './images/icon-argentina.svg'
            saveS1Home('homes1', './images/icon-argentina.svg', 'ARG')
        }
    } else if (event.target.value === 'CRO') {
        if (document.getElementById('aways1').src.indexOf('') != -1) {
            document.getElementById('aways1').src = './images/icon-croatia.svg'
            saveS1Away('aways1', './images/icon-croatia.svg', 'CRO')
        }
    } else if (event.target.value === 'JAP') {
        if (document.getElementById('aways1').src.indexOf('') != -1) {
            document.getElementById('aways1').src = './images/icon-japan.svg'
            saveS1Away('aways1', './images/icon-japan.svg', 'JAP')
        }
    } else if (event.target.value === 'COR') {
        if (document.getElementById('aways1').src.indexOf('') != -1) {
            document.getElementById('aways1').src = './images/icon-south-korea.svg'
            saveS1Away('aways1', './images/icon-south-korea.svg', 'COR')
        }
    } else if (event.target.value === 'BRA') {
        if (document.getElementById('aways1').src.indexOf('') != -1) {
            document.getElementById('aways1').src = './images/icon-brazil.svg'
            document.getElementsByClassName("placar")[34].className = "placar-br";
            document.getElementsByClassName("j-1")[82].className = "j-br";
            document.getElementsByClassName("classificados")[20].className = "classificados-br";
            document.getElementsByClassName("classificados")[20].className = "classificados-br";
            saveS1Away('aways1', './images/icon-brazil.svg', 'BRA')

        }
    }

}
changeSemi2 = (event) => {
    if (event.target.value === 'ING') {
        if (document.getElementById('homes2').src.indexOf('') != -1) {
            document.getElementById('homes2').src = './images/icon-england.svg'
            saveS2Home('homes2', './images/icon-england.svg', 'ING')
        }
    } else if (event.target.value === 'SEN') {
        if (document.getElementById('homes2').src.indexOf('') != -1) {
            document.getElementById('homes2').src = './images/icon-senegal.svg'
            saveS2Home('homes2', './images/icon-senegal.svg', 'SEN')
        }
    } else if (event.target.value === 'FRA') {
        if (document.getElementById('homes2').src.indexOf('') != -1) {
            document.getElementById('homes2').src = './images/icon-france.svg'
            saveS2Home('homes2', './images/icon-france.svg', 'FRA')
        }
    } else if (event.target.value === 'POL') {
        if (document.getElementById('homes2').src.indexOf('') != -1) {
            document.getElementById('homes2').src = './images/icon-poland.svg'
            saveS2Home('homes2', './images/icon-poland.svg', 'POL')
        }
    } else if (event.target.value === 'MAR') {
        if (document.getElementById('aways2').src.indexOf('') != -1) {
            document.getElementById('aways2').src = './images/icon-morocco.svg'
            saveS2Away('aways2', './images/icon-morocco.svg', 'MAR')
        }
    } else if (event.target.value === 'ESP') {
        if (document.getElementById('aways2').src.indexOf('') != -1) {
            document.getElementById('aways2').src = './images/icon-spain.svg'
            saveS2Away('aways2', './images/icon-spain.svg', 'ESP')
        }
    } else if (event.target.value === 'POR') {
        if (document.getElementById('aways2').src.indexOf('') != -1) {
            document.getElementById('aways2').src = './images/icon-portugal.svg'
            saveS2Away('aways2', './images/icon-portugal.svg', 'POR')
        }
    } else if (event.target.value === 'SUI') {
        if (document.getElementById('aways2').src.indexOf('') != -1) {
            document.getElementById('aways2').src = './images/icon-switzerland.svg'
            saveS2Away('aways2', './images/icon-switzerland.svg', 'SUI')
        }
    }

}


change3LugarHome = (event) => {
    if (event.target.value === 'EUA') {
        if (document.getElementById('homep1').src.indexOf('') != -1) {
            document.getElementById('homep1').src = './images/icon-united-states.svg'
            savePerdedor1('homep1', './images/icon-united-states.svg', 'EUA')

        }
    } else if (event.target.value === 'HOL') {
        if (document.getElementById('homep1').src.indexOf('') != -1) {
            document.getElementById('homep1').src = './images/icon-netherlands.svg'
            savePerdedor1('homep1', './images/icon-netherlands.svg', 'HOL')
        }
    } else if (event.target.value === 'AUS') {
        if (document.getElementById('homep1').src.indexOf('') != -1) {
            document.getElementById('homep1').src = './images/icon-australia.svg'
            savePerdedor1('homep1', './images/icon-australia.svg', 'AUS')
        }
    } else if (event.target.value === 'ARG') {
        if (document.getElementById('homep1').src.indexOf('') != -1) {
            document.getElementById('homep1').src = './images/icon-argentina.svg'
            savePerdedor1('homep1', './images/icon-argentina.svg', 'ARG')
        }
    } else if (event.target.value === 'CRO') {
        if (document.getElementById('homep1').src.indexOf('') != -1) {
            document.getElementById('homep1').src = './images/icon-croatia.svg'
            savePerdedor1('homep1', './images/icon-croatia.svg', 'CRO')
        }
    } else if (event.target.value === 'JAP') {
        if (document.getElementById('homep1').src.indexOf('') != -1) {
            document.getElementById('homep1').src = './images/icon-japan.svg'
            savePerdedor1('homep1', './images/icon-japan.svg', 'JAP')
        }
    } else if (event.target.value === 'COR') {
        if (document.getElementById('homep1').src.indexOf('') != -1) {
            document.getElementById('homep1').src = './images/icon-south-korea.svg'
            savePerdedor1('homep1', './images/icon-south-korea.svg', 'COR')
        }
    } else if (event.target.value === 'BRA') {
        if (document.getElementById('homep1').src.indexOf('') != -1) {
            document.getElementById('homep1').src = './images/icon-brazil.svg'
            document.getElementsByClassName("placar")[35].className = "placar-br";
            document.getElementsByClassName("j-1")[83].className = "j-br";
            document.getElementsByClassName("classificados")[22].className = "classificados-br";
            document.getElementsByClassName("classificados")[22].className = "classificados-br";
            savePerdedor1('homep1', './images/icon-brazil.svg', 'BRA')

        }
    }

}
change3LugarAway = (event) => {
    if (event.target.value === 'ING') {
        if (document.getElementById('awayp1').src.indexOf('') != -1) {
            document.getElementById('awayp1').src = './images/icon-england.svg'
            savePerdedor2('awayp1', './images/icon-england.svg', 'ING')
        }
    } else if (event.target.value === 'SEN') {
        if (document.getElementById('awayp1').src.indexOf('') != -1) {
            document.getElementById('awayp1').src = './images/icon-senegal.svg'
            savePerdedor2('awayp1', './images/icon-senegal.svg', 'SEN')
        }
    } else if (event.target.value === 'FRA') {
        if (document.getElementById('awayp1').src.indexOf('') != -1) {
            document.getElementById('awayp1').src = './images/icon-france.svg'
            savePerdedor2('awayp1', './images/icon-france.svg', 'FRA')
        }
    } else if (event.target.value === 'POL') {
        if (document.getElementById('awayp1').src.indexOf('') != -1) {
            document.getElementById('awayp1').src = './images/icon-poland.svg'
            savePerdedor2('awayp1', './images/icon-poland.svg', 'POL')
        }
    } else if (event.target.value === 'MAR') {
        if (document.getElementById('awayp1').src.indexOf('') != -1) {
            document.getElementById('awayp1').src = './images/icon-morocco.svg'
            savePerdedor2('awayp1', './images/icon-morocco.svg', 'MAR')
        }
    } else if (event.target.value === 'ESP') {
        if (document.getElementById('awayp1').src.indexOf('') != -1) {
            document.getElementById('awayp1').src = './images/icon-spain.svg'
            savePerdedor2('awayp1', './images/icon-spain.svg', 'ESP')
        }

    } else if (event.target.value === 'POR') {
        if (document.getElementById('awayp1').src.indexOf('') != -1) {
            document.getElementById('awayp1').src = './images/icon-portugal.svg'
            savePerdedor2('awayp1', './images/icon-portugal.svg', 'POR')
        }
    } else if (event.target.value === 'SUI') {
        if (document.getElementById('awayp1').src.indexOf('') != -1) {
            document.getElementById('awayp1').src = './images/icon-switzerland.svg'
            savePerdedor2('awayP1', './images/icon-switzerland.svg', 'SUI')
        }
    }

}


changeFinalHome = (event) => {
    if (event.target.value === 'EUA') {
        if (document.getElementById('homefinal').src.indexOf('') != -1) {
            document.getElementById('homefinal').src = './images/icon-united-states.svg'
            saveFinalHome('homefinal', './images/icon-united-states.svg', 'EUA')

        }
    } else if (event.target.value === 'HOL') {
        if (document.getElementById('homefinal').src.indexOf('') != -1) {
            document.getElementById('homefinal').src = './images/icon-netherlands.svg'
            saveFinalHome('homefinal', './images/icon-netherlands.svg', 'HOL')
        }
    } else if (event.target.value === 'AUS') {
        if (document.getElementById('homefinal').src.indexOf('') != -1) {
            document.getElementById('homefinal').src = './images/icon-australia.svg'
            saveFinalHome('homefinal', './images/icon-australia.svg', 'AUS')
        }
    } else if (event.target.value === 'ARG') {
        if (document.getElementById('homefinal').src.indexOf('') != -1) {
            document.getElementById('homefinal').src = './images/icon-argentina.svg'
            saveFinalHome('homefinal', './images/icon-argentina.svg', 'ARG')
        }
    } else if (event.target.value === 'CRO') {
        if (document.getElementById('homefinal').src.indexOf('') != -1) {
            document.getElementById('homefinal').src = './images/icon-croatia.svg'
            saveFinalHome('homefinal', './images/icon-croatia.svg', 'CRO')
        }
    } else if (event.target.value === 'JAP') {
        if (document.getElementById('homefinal').src.indexOf('') != -1) {
            document.getElementById('homefinal').src = './images/icon-japan.svg'
            saveFinalHome('homefinal', './images/icon-japan.svg', 'JAP')
        }
    } else if (event.target.value === 'COR') {
        if (document.getElementById('homefinal').src.indexOf('') != -1) {
            document.getElementById('homefinal').src = './images/icon-south-korea.svg'
            saveFinalHome('homefinal', './images/icon-south-korea.svg', 'COR')
        }
    } else if (event.target.value === 'BRA') {
        if (document.getElementById('homefinal').src.indexOf('') != -1) {
            document.getElementById('homefinal').src = './images/icon-brazil.svg'
            saveFinalHome('homefinal', './images/icon-brazil.svg', 'BRA')

        }
    }

}
changeFinalAway = (event) => {
    if (event.target.value === 'ING') {
        if (document.getElementById('awayfinal').src.indexOf('') != -1) {
            document.getElementById('awayfinal').src = './images/icon-england.svg'
            saveFinalAway('awayfinal', './images/icon-england.svg', 'ING')
        }
    } else if (event.target.value === 'SEN') {
        if (document.getElementById('awayfinal').src.indexOf('') != -1) {
            document.getElementById('awayfinal').src = './images/icon-senegal.svg'
            saveFinalAway('awayfinal', './images/icon-senegal.svg', 'SEN')
        }
    } else if (event.target.value === 'FRA') {
        if (document.getElementById('awayfinal').src.indexOf('') != -1) {
            document.getElementById('awayfinal').src = './images/icon-france.svg'
            saveFinalAway('awayfinal', './images/icon-france.svg', 'FRA')
        }
    } else if (event.target.value === 'POL') {
        if (document.getElementById('awayfinal').src.indexOf('') != -1) {
            document.getElementById('awayfinal').src = './images/icon-poland.svg'
            saveFinalAway('awayfinal', './images/icon-poland.svg', 'POL')
        }
    } else if (event.target.value === 'MAR') {
        if (document.getElementById('awayfinal').src.indexOf('') != -1) {
            document.getElementById('awayfinal').src = './images/icon-morocco.svg'
            saveFinalAway('awayfinal', './images/icon-morocco.svg', 'MAR')
        }
    } else if (event.target.value === 'ESP') {
        if (document.getElementById('awayfinal').src.indexOf('') != -1) {
            document.getElementById('awayfinal').src = './images/icon-spain.svg'
            saveFinalAway('awayfinal', './images/icon-spain.svg', 'ESP')
        }

    } else if (event.target.value === 'POR') {
        if (document.getElementById('awayfinal').src.indexOf('') != -1) {
            document.getElementById('awayfinal').src = './images/icon-portugal.svg'
            saveFinalAway('awayfinal', './images/icon-portugal.svg', 'POR')
        }
    } else if (event.target.value === 'SUI') {
        if (document.getElementById('awayfinal').src.indexOf('') != -1) {
            document.getElementById('awayfinal').src = './images/icon-switzerland.svg'
            saveFinalAway('awayfinal', './images/icon-switzerland.svg', 'SUI')
        }
    }

}



saveO1Home = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('home') === null) {
        localStorage.setItem('home', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('home', JSON.stringify(allFlags)
        );
    }



}
saveO1Away = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('away') === null) {
        localStorage.setItem('away', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('away', JSON.stringify(allFlags)
        );
    }

}
saveO2Home = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homeo2') === null) {
        localStorage.setItem('homeo2', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homeo2', JSON.stringify(allFlags)
        );
    }



}
saveO2Away = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('awayo2') === null) {
        localStorage.setItem('awayo2', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('awayo2', JSON.stringify(allFlags)
        );
    }

}
saveO3Home = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homeo3') === null) {
        localStorage.setItem('homeo3', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homeo3', JSON.stringify(allFlags)
        );
    }



}
saveO3Away = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('awayo3') === null) {
        localStorage.setItem('awayo3', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('awayo3', JSON.stringify(allFlags)
        );
    }

}
saveO4Home = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homeo4') === null) {
        localStorage.setItem('homeo4', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homeo4', JSON.stringify(allFlags)
        );
    }



}
saveO4Away = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('awayo4') === null) {
        localStorage.setItem('awayo4', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('awayo4', JSON.stringify(allFlags)
        );
    }

}
saveO5Home = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homeo5') === null) {
        localStorage.setItem('homeo5', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homeo5', JSON.stringify(allFlags)
        );
    }



}
saveO5Away = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('awayo5') === null) {
        localStorage.setItem('awayo5', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('awayo5', JSON.stringify(allFlags)
        );
    }

}
saveO6Home = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homeo6') === null) {
        localStorage.setItem('homeo6', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homeo6', JSON.stringify(allFlags)
        );
    }



}
saveO6Away = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('awayo6') === null) {
        localStorage.setItem('awayo6', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('awayo6', JSON.stringify(allFlags)
        );
    }

}
saveO7Home = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homeo7') === null) {
        localStorage.setItem('homeo7', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homeo7', JSON.stringify(allFlags)
        );
    }



}
saveO7Away = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('awayo7') === null) {
        localStorage.setItem('awayo7', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('awayo7', JSON.stringify(allFlags)
        );
    }

}
saveO8Home = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homeo8') === null) {
        localStorage.setItem('homeo8', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homeo8', JSON.stringify(allFlags)
        );
    }



}
saveO8Away = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('awayo8') === null) {
        localStorage.setItem('awayo8', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('awayo8', JSON.stringify(allFlags)
        );
    }

}




saveQ1Home = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homeq1') === null) {
        localStorage.setItem('homeq1', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homeq1', JSON.stringify(allFlags)
        );
    }



}
saveQ1Away = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('awayq1') === null) {
        localStorage.setItem('awayq1', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('awayq1', JSON.stringify(allFlags)
        );
    }

}
saveQ2Home = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homeq2') === null) {
        localStorage.setItem('homeq2', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homeq2', JSON.stringify(allFlags)
        );
    }


}
saveQ2Away = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('awayq2') === null) {
        localStorage.setItem('awayq2', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('awayq2', JSON.stringify(allFlags)
        );
    }

}
saveQ3Home = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homeq3') === null) {
        localStorage.setItem('homeq3', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homeq3', JSON.stringify(allFlags)
        );
    }

}
saveQ3Away = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('awayq3') === null) {
        localStorage.setItem('awayq3', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('awayq3', JSON.stringify(allFlags)
        );
    }

}
saveQ4Home = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homeq4') === null) {
        localStorage.setItem('homeq4', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homeq4', JSON.stringify(allFlags)
        );
    }

}
saveQ4Away = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('awayq4') === null) {
        localStorage.setItem('awayq4', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('awayq4', JSON.stringify(allFlags)
        );
    }

}



saveS1Home = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homes1') === null) {
        localStorage.setItem('homes1', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homes1', JSON.stringify(allFlags)
        );
    }



}
saveS1Away = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('aways1') === null) {
        localStorage.setItem('aways1', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('aways1', JSON.stringify(allFlags)
        );
    }

}
saveS2Home = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homes2') === null) {
        localStorage.setItem('homes2', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homes2', JSON.stringify(allFlags)
        );
    }



}
saveS2Away = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('aways2') === null) {
        localStorage.setItem('aways2', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('aways2', JSON.stringify(allFlags)
        );
    }

}



savePerdedor1 = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homep1') === null) {
        localStorage.setItem('homep1', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homep1', JSON.stringify(allFlags)
        );
    }



}
savePerdedor2 = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('awayp1') === null) {
        localStorage.setItem('awayp1', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('awayp1', JSON.stringify(allFlags)
        );
    }

}



saveFinalHome = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('homefinal') === null) {
        localStorage.setItem('homefinal', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('homefinal', JSON.stringify(allFlags)
        );
    }



}
saveFinalAway = (flag, src, value) => {

    const allFlags = { [flag]: src, value: value }

    if (localStorage.getItem('awayfinal') === null) {
        localStorage.setItem('awayfinal', JSON.stringify(allFlags));
    } else {
        localStorage.setItem('awayfinal', JSON.stringify(allFlags)
        );
    }

}



loadFlags = () => {

    const homeo1 = localStorage.getItem('home')
    document.getElementById('oh').value = JSON.parse(homeo1).value
    document.getElementById('home').src = JSON.parse(homeo1).home
    const awayo1 = localStorage.getItem('away')
    document.getElementById('oa').value = JSON.parse(awayo1).value
    document.getElementById('away').src = JSON.parse(awayo1).away

    const homeo2 = localStorage.getItem('homeo2')
    document.getElementById('oh2').value = JSON.parse(homeo2).value
    document.getElementById('homeo2').src = JSON.parse(homeo2).homeo2
    const awayo2 = localStorage.getItem('awayo2')
    document.getElementById('oa2').value = JSON.parse(awayo2).value
    document.getElementById('awayo2').src = JSON.parse(awayo2).awayo2

    const homeo3 = localStorage.getItem('homeo3')
    document.getElementById('oh3').value = JSON.parse(homeo3).value
    document.getElementById('homeo3').src = JSON.parse(homeo3).homeo3
    const awayo3 = localStorage.getItem('awayo3')
    document.getElementById('oa3').value = JSON.parse(awayo3).value
    document.getElementById('awayo3').src = JSON.parse(awayo3).awayo3

    const homeo4 = localStorage.getItem('homeo4')
    const brO1 = document.getElementById('oh4').value = JSON.parse(homeo4).value
    if (brO1 === "BRA") {
        document.getElementsByClassName("placar")[27].className = "placar-br";
        document.getElementsByClassName("j-1")[75].className = "j-br";
        document.getElementsByClassName("classificados")[6].className = "classificados-br";
        document.getElementsByClassName("classificados")[6].className = "classificados-br";
    }
    document.getElementById('homeo4').src = JSON.parse(homeo4).homeo4
    const awayo4 = localStorage.getItem('awayo4')
    document.getElementById('oa4').value = JSON.parse(awayo4).value
    document.getElementById('awayo4').src = JSON.parse(awayo4).awayo4

    const homeo5 = localStorage.getItem('homeo5')
    document.getElementById('oh5').value = JSON.parse(homeo5).value
    document.getElementById('homeo5').src = JSON.parse(homeo5).homeo5
    const awayo5 = localStorage.getItem('awayo5')
    document.getElementById('oa5').value = JSON.parse(awayo5).value
    document.getElementById('awayo5').src = JSON.parse(awayo5).awayo5

    const homeo6 = localStorage.getItem('homeo6')
    document.getElementById('oh6').value = JSON.parse(homeo6).value
    document.getElementById('homeo6').src = JSON.parse(homeo6).homeo6
    const awayo6 = localStorage.getItem('awayo6')
    document.getElementById('oa6').value = JSON.parse(awayo6).value
    document.getElementById('awayo6').src = JSON.parse(awayo6).awayo6

    const homeo7 = localStorage.getItem('homeo7')
    document.getElementById('oh7').value = JSON.parse(homeo7).value
    document.getElementById('homeo7').src = JSON.parse(homeo7).homeo7
    const awayo7 = localStorage.getItem('awayo7')
    document.getElementById('oa7').value = JSON.parse(awayo7).value
    document.getElementById('awayo7').src = JSON.parse(awayo7).awayo7

    const homeo8 = localStorage.getItem('homeo8')
    document.getElementById('oh8').value = JSON.parse(homeo8).value
    document.getElementById('homeo8').src = JSON.parse(homeo8).homeo8
    const awayo8 = localStorage.getItem('awayo8')
    document.getElementById('oa8').value = JSON.parse(awayo8).value
    document.getElementById('awayo8').src = JSON.parse(awayo8).awayo8











    const homeq1 = localStorage.getItem('homeq1')
    document.getElementById('hq1').value = JSON.parse(homeq1).value
    document.getElementById('homeq1').src = JSON.parse(homeq1).homeq1
    const awayq1 = localStorage.getItem('awayq1')
    document.getElementById('aq1').value = JSON.parse(awayq1).value
    document.getElementById('awayq1').src = JSON.parse(awayq1).awayq1

    const homeq2 = localStorage.getItem('homeq2')
    document.getElementById('hq2').value = JSON.parse(homeq2).value
    document.getElementById('homeq2').src = JSON.parse(homeq2).homeq2
    const awayq2 = localStorage.getItem('awayq2')
    const brQ1 = document.getElementById('aq2').value = JSON.parse(awayq2).value
    if (brQ1 === "BRA") {
        document.getElementsByClassName("placar")[32].className = "placar-br";
        document.getElementsByClassName("j-1")[80].className = "j-br";
        document.getElementsByClassName("classificados")[16].className = "classificados-br";
        document.getElementsByClassName("classificados")[16].className = "classificados-br";
    }
    document.getElementById('awayq2').src = JSON.parse(awayq2).awayq2

    const homeq3 = localStorage.getItem('homeq3')
    document.getElementById('hq3').value = JSON.parse(homeq3).value
    document.getElementById('homeq3').src = JSON.parse(homeq3).homeq3
    const awayq3 = localStorage.getItem('awayq3')
    document.getElementById('aq3').value = JSON.parse(awayq3).value
    document.getElementById('awayq3').src = JSON.parse(awayq3).awayq3

    const homeq4 = localStorage.getItem('homeq4')
    document.getElementById('hq4').value = JSON.parse(homeq4).value
    document.getElementById('homeq4').src = JSON.parse(homeq4).homeq4
    const awayq4 = localStorage.getItem('awayq4')
    document.getElementById('aq4').value = JSON.parse(awayq4).value
    document.getElementById('awayq4').src = JSON.parse(awayq4).awayq4

    const homes1 = localStorage.getItem('homes1')
    document.getElementById('hs1').value = JSON.parse(homes1).value
    document.getElementById('homes1').src = JSON.parse(homes1).homes1
    const aways1 = localStorage.getItem('aways1')
    const brS1 = document.getElementById('as1').value = JSON.parse(aways1).value
    if (brS1 === "BRA") {
        document.getElementsByClassName("placar")[34].className = "placar-br";
        document.getElementsByClassName("j-1")[82].className = "j-br";
        document.getElementsByClassName("classificados")[20].className = "classificados-br";
        document.getElementsByClassName("classificados")[20].className = "classificados-br";
    }
    document.getElementById('aways1').src = JSON.parse(aways1).aways1

    const homes2 = localStorage.getItem('homes2')
    document.getElementById('hs2').value = JSON.parse(homes2).value
    document.getElementById('homes2').src = JSON.parse(homes2).homes2
    const aways2 = localStorage.getItem('aways2')
    document.getElementById('as2').value = JSON.parse(aways2).value
    document.getElementById('aways2').src = JSON.parse(aways2).aways2

    const homep1 = localStorage.getItem('homep1')
    const brP1 = document.getElementById('ps1').value = JSON.parse(homep1).value
    if (brP1 === "BRA") {
        document.getElementsByClassName("placar")[35].className = "placar-br";
        document.getElementsByClassName("j-1")[83].className = "j-br";
        document.getElementsByClassName("classificados")[22].className = "classificados-br";
        document.getElementsByClassName("classificados")[22].className = "classificados-br";
    }
    document.getElementById('homep1').src = JSON.parse(homep1).homep1
    const awayp1 = localStorage.getItem('awayp1')
    document.getElementById('ps2').value = JSON.parse(awayp1).value
    document.getElementById('awayp1').src = JSON.parse(awayp1).awayp1

    const homeFinal = localStorage.getItem('homefinal')
    const brF = document.getElementById('hf').value = JSON.parse(homeFinal).value
    if (brF === "BRA") {
        document.getElementsByClassName("placar")[36].className = "placar-br";
        document.getElementsByClassName("j-1")[84].className = "j-br";
        document.getElementsByClassName("classificados")[24].className = "classificados-br";
        document.getElementsByClassName("classificados")[24].className = "classificados-br";
    }
    document.getElementById('homefinal').src = JSON.parse(homeFinal).homefinal
    const awayFinal = localStorage.getItem('awayfinal')
    document.getElementById('af').value = JSON.parse(awayFinal).value
    document.getElementById('awayfinal').src = JSON.parse(awayFinal).awayfinal

}






























