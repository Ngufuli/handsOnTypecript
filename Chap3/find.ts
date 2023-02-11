const items = [
    {name: 'Mike', age: 20},
    {name: 'Nick', age: 22},
    {name: 'Lucy',age: 24},
    {name: 'Mike', age: 26}
]

const Mike = items.find((item)=> {
    return item.name === 'Mike'
})

console.log(Mike)