

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
        text : "Free returns",
        img : require("./assets/Homepage/galochka.png")
    },
]

export interface IProducts {
    id : number | string,
    backImage? : any,
    ellipse? : any,
    image : any,
    title : string,
    price : string | number,
    rate : number
}

export const products : IProducts[] = [
    {
       id : 1,
       ellipse : require("./assets/Products/Ellipse 17.png"),
       image : require("./assets/Products/image 1.png"),
       title : "Adidas Falcon Shoes for men - 2021 Edition",
       price : "$120.50",
       rate : 2
    },
    {
        id : 2,
        ellipse : require("./assets/Products/Ellipse 18.png"),
        image : require("./assets/Products/image 2.png"),
        title : "Adidas Falcon Shoes for men - 2021 Edition",
        price : "$160.99",
        rate : 3
     },
     {
        id : 3,
        ellipse : require("./assets/Products/Ellipse 19.png"),
        image : require("./assets/Products/image 3.png"),
        title : "Adidas Falcon Shoes for men - 2021 Edition",
        price : "$230.50",
        rate : 5
     },
     {
        id : 4,
        ellipse : require("./assets/Products/Ellipse 20.png"),
        image : require("./assets/Products/image 4.png"),
        title : "Adidas Falcon Shoes for men - 2021 Edition",
        price : "$420.00",
        rate : 4
     },
]

export interface IAcces{
    id : number | string,
    image : any,
    heading? : string,
    title? : string,
    classs : string,
   
}

export const accesorries : IAcces[] = [
    {
        id : 1,
        image : require("./assets/Accesorries/football 1.png"),
        heading : "Football",
        title : "We receive new sportwear every day. Just take your pick.",
        classs : 'green'
    },
    {
        id : 2,
        image : require("./assets/Accesorries/volley 1.png"),
        heading : "Volleyball",
        title : "We receive new sportwear every day. Just take your pick.",
        classs : 'blue'
    }
]

export const shop : IProducts[] = [
    {
        id : 1,
        backImage : require("./assets/Shop/Rectangle 13.png"),
        image : require("./assets/Shop/image 7.png"),
        title : "Adidas Falcon Shoes for men - 2021 Edition",
        price : 120.50,
        rate : 3
    },
    {
        id : 2,
        backImage : require("./assets/Shop/Rectangle 14.png"),
        image : require("./assets/Shop/image 8.png"),
        title : "Adidas Falcon Shoes for men - 2021 Edition",
        price : 120.50,
        rate : 4
    },
    {
        id : 3,
        backImage : require("./assets/Shop/Rectangle 15.png"),
        image : require("./assets/Shop/image 5.png"),
        title : "Adidas Falcon Shoes for men - 2021 Edition",
        price : 120.50,
        rate : 3
    },
    {
        id : 4,
        backImage : require("./assets/Shop/Rectangle 16.png"),
        image : require("./assets/Shop/image 1.png"),
        title : "Adidas Falcon Shoes for men - 2021 Edition",
        price : 120.50,
        rate : 5
    },
]

export interface IIcon {
    name : string,
    icon : any
}

export interface IProd {
    id : number | string,
    heading : string,
    image : any,
    ellipse : any,
    count : number,
    color : string,
}

export const prod = [
    {
        id : 1,
        heading : "Sneakers Collection",
        image : require('./assets/Category/image 9.png'),
        count : 120,
        ellipse : require("./assets/Category/Ellipse 1.png"),
        color : "#315BFF"
    },
    {
        id : 2,
        heading : "Football Collection",
        image : require('./assets/Category/football 1.png'),
        count : 80,
        ellipse : require("./assets/Category/Ellipse 2.png"),
        color : "#FE7831"
    },
    {
        id : 3,
        heading : "Volleyball Collection",
        image : require('./assets/Category/volley 1.png'),
        count : 160,
        ellipse : require("./assets/Category/Ellipse 3.png"),
        color : "#FF3C78"
    },
]

export interface ICarousel {
    id : number
    image : any
}

export const carousel = [
    {
        id : 1,
        image : require("./assets/Brand/Image 5.png") 
    },
    {
        id : 2,
        image : require("./assets/Brand/Image 6.png") 
    },
    {
        id : 3,
        image : require("./assets/Brand/Image 7.png") 
    },
    {
        id : 4,
        image : require("./assets/Brand/Image 8.png") 
    }
]

//Footer
export interface IFooter {
    name : string
}

export const home : IFooter[] = [
    {
        name : "Support Center",
    },
    {
        name : "Customer Support",
    },
    {
        name : "Copyright",
    },
    {
        name : "Popular Campaign",
    },
]

export const ourInformation : IFooter[] = [
    {
        name : "Return Policy",
    },
    {
        name : "Privacy Policy",
    },
    {
        name : "Terms and Conditions",
    },
    {
        name : "Site Map",
    },
    {
        name : "Store Hours",
    },
    
]

export const myAccount : IFooter[] = [
    {
        name : "Press Inquiries",
    },
    {
        name : "Social Media Directories",
    },
    {
        name : "Permission",
    },
    {
        name : "Requests",
    },
]