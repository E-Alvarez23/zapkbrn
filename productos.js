const productos = [
  {
    imagen: "images/Nike Panda Dunks.png",
    name: "Nike Panda Dunks",
    calidad: "Premium",
    precio: "$245",
    id: 1,
    categoria: "NIKE",
  },

  {
    imagen: "images/nike air force 1 negros.png",
    name: "Nike Air Force1 Black",
    calidad: "premium",
    precio: "$245",
    id: 2,
    categoria: "NIKE",
  },

  {
    imagen: "images/nike air force blacos.png",
    name: "Nike Air Force1 White",
    calidad: "premium",
    precio: "$245",
    id: 3,
    categoria: "NIKE",
  },

  {
    imagen: "images/nikeblazer.jpg",
    name: "Nike Blazer",
    calidad: "premium",
    precio: "$245",
    id: 4,
    categoria: "NIKE",
  },

  {
    imagen: "images/Nike Air Max TN.png",
    name: "Nike Air Max TN",
    calidad: "Premium",
    precio: "$245",
    id: 5,
    categoria: "NIKE",
  },

  {
    imagen: "images/Nike Air Max Black-White.png",
    name: "Nike Air Max 90",
    calidad: "premium",
    precio: "$245",
    id: 6,
    categoria: "NIKE",
  },
  {
    imagen: "images/Nike Cortez.png",
    name: "Nike Cortez",
    calidad: "premium",
    precio: "$245",
    id: 7,
    categoria: "NIKE",
  },

  {
    imagen: "images/Nike Air Max 97.jpg",
    name: "Nike Air Max 97",
    calidad: "premium",
    precio: "$245",
    id: 8,
    categoria: "NIKE",
  },
  {
    imagen: "images/Nike Air Huarache.png",
    name: "Nike Air Huarache",
    calidad: "premium",
    precio: "$245",
    id: 9,
    categoria: "NIKE",
  },
  {
    imagen: "images/Morehouse.png",
    name: "Morehouse",
    calidad: "premium",
    precio: "$60",
    id: 10,
    categoria: "NIKE",
  },
  {
    imagen: "images/Nike Calm Electric.png",
    name: "Nike Calm Electric",
    calidad: "premium",
    precio: "$60",
    id: 11,
    categoria: "NIKE",
  },
  {
    imagen: "images/Nike Calm SE.png",
    name: "Nike Calm SE",
    calidad: "premium",
    precio: "$60",
    id: 12,
    categoria: "NIKE",
  },

  {
    imagen:
      "https://th.bing.com/th/id/OIP.-xHS2d9FjYaSzK79SLGt3gAAAA?rs=1&pid=ImgDetMain",
    name: "Adidas Campus",
    calidad: "Premium",
    precio: "$240",
    id: 13,
    categoria: "ADIDAS",
  },

  {
    imagen: "images/adidas superstar.png",
    name: "Adidas SuperStar",
    calidad: "Premium",
    precio: "$240",
    id: 14,
    categoria: "ADIDAS",
  },
  {
    imagen: "images/Adidas Swif Run.webp",
    name: "Adidas Switf Run",
    calidad: "Premium",
    precio: "$240",
    id: 15,
    categoria: "ADIDAS",
  },
  {
    imagen: "images/adidas forum.jpg",
    name: "Adidas Forum",
    calidad: "Premium",
    precio: "$240",
    id: 16,
    categoria: "ADIDAS",
  },
  {
    imagen: "images/Adidas OZMILLEN.avif",
    name: "Adidas OZMILLEN",
    calidad: "Premium",
    precio: "$240",
    id: 17,
    categoria: "ADIDAS",
  },
  {
    imagen: "images/Adidas Midcity Low.avif",
    name: "Adidas Midcity Low",
    calidad: "Premium",
    precio: "$240",
    id: 18,
    categoria: "ADIDAS",
  },
  {
    imagen: "images/Tenis Dime Stan Smith.avif",
    name: "Adidas Dime Stan Smith",
    calidad: "Premium",
    precio: "$240",
    id: 19,
    categoria: "ADIDAS",
  },
  {
    imagen: "images/Tenis Samba OG.avif",
    name: "Adidas Samba OG",
    calidad: "Premium",
    precio: "$240",
    id: 20,
    categoria: "ADIDAS",
  },
  {
    imagen: "images/Tenis Own the Game 3.avif",
    name: "Adidas Own the Game 3",
    calidad: "Premium",
    precio: "$240",
    id: 21,
    categoria: "ADIDAS",
  },
  {
    imagen: "images/Sandalias adilette Aqua.avif",
    name: "Adidas adilette Aqua",
    calidad: "Premium",
    precio: "$240",
    id: 22,
    categoria: "ADIDAS",
  },
  {
    imagen: "images/Sandalias Adilette Zplaash.avif",
    name: "Adidas Adilette Zplaash",
    calidad: "Premium",
    precio: "$240",
    id: 23,
    categoria: "ADIDAS",
  },
  {
    imagen: "images/ADICANE SLIDE.avif",
    name: "ADICANE SLIDE",
    calidad: "Premium",
    precio: "$240",
    id: 24,
    categoria: "ADIDAS",
  },
  {
    imagen: "images/newbalance9060.webp",
    name: "New Balance 9060",
    calidad: "Premium",
    precio: "$235",
    id: 25,
    categoria: "NEW BALANCE",
  },
  {
    imagen: "images/newbalance530.webp",
    name: "New Balance 530",
    calidad: "Premium",
    precio: "$235",
    id: 26,
    categoria: "NEW BALANCE",
  },
  {
    imagen: "images/newbalance1906R.webp",
    name: "New Balance 1906R",
    calidad: "Premium",
    precio: "$235",
    id: 27,
    categoria: "NEW BALANCE",
  },
  {
    imagen: "images/newbalanceFresh Foam X More v5.webp",
    name: "New Balance Fresh Foam X More v5",
    calidad: "Premium",
    precio: "$235",
    id: 28,
    categoria: "NEW BALANCE",
  },
  {
    imagen: "images/newbalanceT500.webp",
    name: "New Balance T500",
    calidad: "Premium",
    precio: "$235",
    id: 29,
    categoria: "NEW BALANCE",
  },
  {
    imagen: "images/newbalanceFresh Foam X 860v14.webp",
    name: "New Balance Fresh Foam X 860v14",
    calidad: "Premium",
    precio: "$235",
    id: 30,
    categoria: "NEW BALANCE",
  },
  {
    imagen: "images/Made in UK 1500.webp",
    name: "NB Made in UK 1500",
    calidad: "Premium",
    precio: "$235",
    id: 31,
    categoria: "NEW BALANCE",
  },
  {
    imagen: "images/NB 327.webp",
    name: "New Balance 327",
    calidad: "Premium",
    precio: "$235",
    id: 32,
    categoria: "NEW BALANCE",
  },
  {
    imagen: "images/NB Numeric 480.webp",
    name: "NB Numeric 480",
    calidad: "Premium",
    precio: "$235",
    id: 33,
    categoria: "NEW BALANCE",
  },
  {
    imagen: "images/340.webp",
    name: "NB 340",
    calidad: "Premium",
    precio: "$235",
    id: 34,
    categoria: "NEW BALANCE",
  },
  {
    imagen: "images/200 N.webp",
    name: "NB 200 N",
    calidad: "Premium",
    precio: "$235",
    id: 35,
    categoria: "NEW BALANCE",
  },
  {
    imagen: "images/200 - Adjustable.webp",
    name: "NB 200 - Adjustable",
    calidad: "Premium",
    precio: "$235",
    id: 36,
    categoria: "NEW BALANCE",
  },

  {
    imagen: "images/Nike Phantom GX Elite.png",
    name: "Nike Phantom GX Elite",
    calidad: "Premium",
    precio: "$90",
    id: 37,
    categoria: "NIKE",
  },

  {
    imagen: "images/Nike Mercurial Vapor 15 Academy.png",
    name: "Nike Mercurial Vapor 15 Academy",
    calidad: "Premium",
    precio: "$90",
    id: 38,
    categoria: "NIKE",
  },
  {
    imagen: "images/Nike Mercurial Superfly 9 Pro.png",
    name: "Nike Mercurial Superfly 9 Pro",
    calidad: "Premium",
    precio: "$90",
    id: 39,
    categoria: "NIKE",
  },

  {
    imagen: "images/adidasCrazyfast Club.avif",
    name: "Adidas Crazyfast Club",
    calidad: "Premium",
    precio: "$95",
    id: 40,
    categoria: "ADIDAS",
  },
  {
    imagen: "images/adidasPredator League.avif",
    name: "Adidas Predator League",
    calidad: "Premium",
    precio: "$95",
    id: 41,
    categoria: "ADIDAS",
  },
  {
    imagen: "images/adidasF50 Elite.avif ",
    name: "Adidas F50 Elite ",
    calidad: "Premium",
    precio: "$95",
    id: 42,
    categoria: "ADIDAS",
  },
  {
    imagen: "images/newbalanceFURON PRO FG V7+.webp ",
    name: "NB FURON PRO FG V7+ ",
    calidad: "Premium",
    precio: "$99",
    id: 43,
    categoria: "NEW BALANCE",
  },
  {
    imagen: "images/newbalanceTEKELA MAGIQUE FG V4+.webp",
    name: "NB TEKELA MAGIQUE FG V4+ ",
    calidad: "Premium",
    precio: "$99",
    id: 44,
    categoria: "NEW BALANCE",
  },
  {
    imagen: "images/newbalance442 V2 TEAM FG.webp ",
    name: "NB 442 V2 TEAM FG ",
    calidad: "Premium",
    precio: "$99",
    id: 45,
    categoria: "NEW BALANCE",
  },
  {
    imagen: "images/Dockers Shelter Oxford2.jpg ",
    name: "Dockers Shelter Oxford",
    calidad: "Premium",
    precio: "$120",
    id: 46,
    categoria: "FORMALES",
  },
  {
    imagen: "images/Deer Stags Gabe Oxford4.jpeg",
    name: "Deer Stags Gabe Oxford",
    calidad: "Premium",
    precio: "$120",
    id: 47,
    categoria: "FORMALES",
  },
  {
    imagen: "images/Florsheim Midtown Plain Oxford2.jpg ",
    name: "Florsheim Midtown Plain Oxford",
    calidad: "Premium",
    precio: "$120",
    id: 48,
    categoria: "FORMALES",
  },
  {
    imagen: "images/Florsheim Mocasín Bogan3.jpg",
    name: "Florsheim Mocasín Bogan",
    calidad: "Premium",
    precio: "$120",
    id: 49,
    categoria: "FORMALES",
  },
  {
    imagen: "images/Florsheim Mocasín Jerod Penny Driver4.jpg ",
    name: "Florsheim Mocasín Jerod Penny Driver",
    calidad: "Premium",
    precio: "$120",
    id: 50,
    categoria: "FORMALES",
  },
  {
    imagen: "images/Florsheim Berwyn3.jpg ",
    name: "Florsheim Berwyn",
    calidad: "Premium",
    precio: "$120",
    id: 51,
    categoria: "FORMALES",
  },
];
