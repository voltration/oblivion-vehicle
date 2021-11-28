// @ts-nocheck
// copied from my server
mp.events.addCommand("spawn", (player, model) => {

    let vehicle =
        mp.vehicles.new(mp.joaat(model), new mp.Vector3(
            player.position.x,
            player.position.y, 
            player.position.z  
        ),
        {
            heading: player.heading,
            numberPlate: "DEBUG",
            color: [[255, 255, 255], [0, 0, 0]]
        });

        player.putIntoVehicle(vehicle, 0);
});