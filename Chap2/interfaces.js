var linda = {
    name: "Linda",
    id: 2,
    isManager: false,
    getUniqueId: function () {
        var uniqueId = linda.id + "-" + linda.name;
        if (!linda.isManager) {
            return "emp-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(linda.getUniqueId());
var Lucy = {
    name: "Lucy",
    id: 1,
    isManager: true,
    getUniqueId: function () {
        var uniqueId = Lucy.id + "-" + Lucy.name;
        if (Lucy.isManager) {
            return "mgr-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(Lucy.getUniqueId());
