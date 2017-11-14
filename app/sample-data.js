module.exports = {
  "stores": {
    "Joe's Pizza on Bloor Ave": {
      "orders": [
        {
          "human": "Rami Sayar",
          "time": new Date(2017, 4, 5, 15, 11, 45, 0),
          "pizzas": [{
            "toppings": "Meat-Lovers",
            "size": "S"
          }],
          "price": 15,
          "address": "321 Sesame Street, Montreal, Canada",
          "status": "In The Oven" // status := Open -> Confirmed -> In The Oven -> Delivered
        },
        {
          "human": "Jeremy Foster",
          "time": new Date(2017, 4, 4, 20, 31, 0, 0),
          "pizzas": [{
            "toppings": ["cheese"],
            "size": "XL"
          }],
          "price": 15,
          "address": "123 Sesame Street, Montreal, Canada",
          "status": "Delivered" // status := Open -> Confirmed -> In The Oven -> Delivered
        }
      ]
    },
    "Joe's Pizza on University Ave": {
      "orders": []
    }
  },
  "humans": {
    "Noureddine Charaabi" : {
      "conversations": [
        {
          "who": "bot",
          "text": "Hello, can I help you ?",
          "time": new Date(2017, 4, 5, 15, 10, 0, 0)
        },
        {
          "who": "human",
          "text": "Can I assist in MVA react?",
          "time": new Date(2017, 4, 5, 15, 10, 30, 0)
        }, 
        {
          "who": "bot",
          "text": "Great, my name is Rami Sayar and this is Jeremy from MVA. Did you developped in react before ?",
          "time": new Date(2017, 4, 5, 15, 11, 0, 0)
        },
        {
          "who": "human",
          "text": "Oh no, but i hope so.",
          "time": new Date(2017, 4, 5, 15, 11, 30, 0)
        },
      ],
      "orders": [
        {
          "time": new Date(2017, 4, 5, 15, 11, 45, 0),
          "pizzas": [{
            "toppings": ["Meat-Lovers"],
            "size": "S"
          }],
          "price": 15,
          "address": "321 Sesame Street, Montreal, Canada",
          "status": "Confirmed" // status := Open -> Confirmed -> In The Oven -> Delivered
        }
      ]
    },
    "Rami Sayar MVA" : {
      "conversations": [
        {
          "who": "bot",
          "text": "Hello, can I help you ?",
          "time": new Date(2017, 4, 4, 20, 30, 0, 0)
        },
        {
          "who": "human",
          "text": "Can I join you in MVA ? ",
          "time": new Date(2017, 4, 4, 20, 30, 15, 0)
        }, 
        {
          "who": "bot",
          "text": "okay, welcome. Did you assit before in MVA ?",
          "time": new Date(2017, 4, 4, 20, 30, 30, 0)
        },
        {
          "who": "human",
          "text": "No but i hope so.",
          "time": new Date(2017, 4, 4, 20, 30, 45, 0)
        },
      ],
      "orders": [
        {
          "time": new Date(2017, 4, 4, 20, 31, 0, 0),
          "pizzas": [{
            "toppings": ["cheese"],
            "size": "XL"
          }],
          "price": 15,
          "address": "123 Sesame Street, Montreal, Canada",
          "status": "Delivered" // status := Open -> Confirmed -> In The Oven -> Delivered
        }
      ]
    }
  }
};
