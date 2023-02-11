var widgets = [
    { id: 1, color: 'blue' },
    { id: 2, color: 'yellow' },
    { id: 3, color: 'orange' },
    { id: 4, color: 'blue' }
];
// console.log('some are blue', widgets.some(item => {
//     return item.color === 'blue';
// }));
var val = widgets.some(function (item) {
    console.log('Some blue are');
    return item.color === 'blue';
});
console.log('every one is blue', widgets.every(function (item) {
    return item.color === 'blue';
}));
