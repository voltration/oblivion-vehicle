// @ts-nocheck
/*
 * Check my discord message attached to the post.
 */
var access = true;

const getNearbyVehicle = (player, distance = 5) => {
    let found_vehicle = null;
    mp.vehicles.forEach((vehicle) => {
        if (mp.vehicles.exists(vehicle) && player.dist(vehicle.position) <= distance) {
            found_vehicle = vehicle;
        }
    });
    return found_vehicle;
};


mp.events.add("vehicle:lock", (player) => {
    let vehicle = getNearbyVehicle(player, 5);
if (vehicle) {
    if (access) {
        let newState = !vehicle.locked;
        vehicle.locked = newState;
        player.outputChatBox(`Your vehicle doors are now ${newState ? `locked` : `unlocked`}.`);
        }
        else {
            player.outputChatBox("You dont have the keys!");
        }
    }
});

mp.events.add("vehicle:engine", (player) => {
    let vehicle = player.vehicle;

    if (vehicle) {
        if (access) {
            let newState = !vehicle.engine;
            vehicle.engine = newState;
            player.outputChatBox(`Turning engine ${newState ? `on` : `off`}.`);
            }
            else {
                player.outputChatBox("You dont have the keys!");
            }
        }
});