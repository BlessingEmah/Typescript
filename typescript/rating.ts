const Laptop: {
    name: string;
    model:string;
    ratings: number;
    ramSize: number;
}[]
     = [
    {
        name: "Dell",
        model: "Inspirion view",
        ratings: 5,
        ramSize: 12
    }, 
    {
        name: "Hp",
        model: "Elitebook",
        ratings: 2.5,
        ramSize: 8
    }, 
    {
        name: "Macbook",
        model: "Pro 2020",
        ratings: 4.5,
        ramSize: 16
    }, 
    ]

function loopThrough () { 
    let ratings:number[] = [];
    for (let i = 0; i < Laptop.length; i++) {
        ratings.push (Laptop[0].ratings);
      
    }
    console.log(ratings);
}

loopThrough()