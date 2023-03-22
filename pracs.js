const cars=[
    {"model":"Lamborghini","color":"Green","rating":7},
    {"model":"Ferrari","color":"Red","rating":9}
]

const anime=cars.find(car=>car.model==="Ferrari");
console.log(anime.color);