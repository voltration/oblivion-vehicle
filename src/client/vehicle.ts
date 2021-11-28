 /*
 * Keycodes: https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes
 */
// Binds the key "K" to the lock function.
mp.keys.bind(0x4B, true, function() {
    mp.events.callRemote("vehicle:lock");
});

// Binds the key "Y" to the engine function.
mp.keys.bind(0x59, true, function() {
    mp.events.callRemote("vehicle:engine");
});
