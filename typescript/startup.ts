import {Structure} from './structure'

const Startup: Structure[]= [
    {
        name: 'Bumpa',
        yearsFounded : 2,
        cofounders: [ 2 ,'Kelvin','Teejay'],
        hasRaised : true,
        Sector: 'People',
    },

    {
        name: 'Flux',
        yearsFounded : 5,
        
        cofounders: [3, 'Ben','Ayomide'],
        hasRaised : true,
        Sector: 'Crypto',
    },

    {
        name: 'Techbrigd',
        yearsFounded : 2,
        cofounders: [2, 'Blessing Emah', 'Samuel Moses'],
        hasRaised : true,
        Sector: 'Crypto',
    }
]

function loopThrough() {
    // let cofounders:[number, string, string][] = [];
    let cofounders:[number, string, string][] = [];
    for(let i =0; i < Startup.length; i++) {
        cofounders.push(Startup[i].cofounders);
    }
    console.log(cofounders);
}

loopThrough()

