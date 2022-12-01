"use strict";
exports.__esModule = true;
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 1] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 3] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 5] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var Poles;
(function (Poles) {
    Poles["north"] = "NORTH";
    Poles["south"] = "SOUTH";
    Poles["east"] = "EAST";
    Poles["west"] = "WEST";
})(Poles || (Poles = {}));
console.log(Poles);
