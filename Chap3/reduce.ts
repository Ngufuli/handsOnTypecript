const allTrucks = [
    2,3,4,7,10
]

const initialCapacity = 0;
const allTonnage = allTrucks.reduce((totalCapacity, currentCapacity) => {
    totalCapacity = totalCapacity + currentCapacity;

    return totalCapacity;
}, initialCapacity);

console.log(allTonnage)