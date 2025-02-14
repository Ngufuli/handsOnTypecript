var nick = {
    name: "Nick",
    id: 3,
    isCS: true,
    getUniqueID: function () {
        var uniqueid = nick.id + "-" + nick.name;
        if (!nick.isCS) {
            return "std-" + uniqueid;
        }
        return uniqueid;
    }
};
console.log(nick.getUniqueID());
