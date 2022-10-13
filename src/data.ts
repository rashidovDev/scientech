


export interface INav {
    id : number,
    name : string,
    href : string,
}

export const navigation : INav[] = [
    {
        id : 1,
        name : "Footwear",
        href : "/"
    },
    {
        id : 2,
        name : "About us",
        href : "/"
    },
    {
        id : 3,
        name : "Products",
        href : "/"
    },
    {
        id : 1,
        name : "Sale",
        href : "/"
    }
]

export interface ICate {
    text : string,
    img : any
}

export const free : ICate[] = [
    {
        text : "Free shipping",
        img : require("./assets/Homepage/galochka.png")
    },
    {
        text : "Free shipping",
        img : require("./assets/Homepage/galochka.png")
    },
]