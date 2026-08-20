const refTime = Date.now();

function eventOne(callback) {
    setTimeout(() => {
        callback({
            eventName: 'evento1',
            eventType: 'aviso simple',
            scheduledTime: refTime + 1000,
            refTime: Date.now(),
        });
    }, 1000);
}

function eventTwo(callback) {
    setTimeout(() => {
        callback({
            eventName: 'evento2',
            eventType: 'aviso complejo',
            scheduledTime: refTime + 1800,
            refTime: Date.now(),
        });
    }, 1800);
}

function eventThree(callback) {
    setTimeout(() => {
        callback({
            eventName: 'evento3',
            eventType: 'aviso simple',
            scheduledTime: refTime + 1300,
            refTime: Date.now(),
        });
    }, 1300);
}

function eventFour(callback) {
    setTimeout(() => {
        callback({
            eventName: 'evento4',
            eventType: 'aviso complejo',
            scheduledTime: refTime + 4500,
            refTime: Date.now(),
        });
    }, 4500);
}

function eventFive(callback) {
    setTimeout(() => {
        callback({
            eventName: 'evento5',
            eventType: 'aviso simple',
            scheduledTime: refTime + 3450,
            refTime: Date.now(),
        });
    }, 3450);
}

function eventSix(callback) {
    setTimeout(() => {
        callback({
            eventName: 'evento6',
            eventType: 'aviso complejo',
            scheduledTime: refTime + 1200,
            refTime: Date.now(),
        });
    }, 1200);
}

function eventSeven(callback) {
    setTimeout(() => {
        callback({
            eventName: 'evento7',
            eventType: 'aviso simple',
            scheduledTime: refTime + 3800,
            refTime: Date.now(),
        });
    }, 3800);
}

function eventEight(callback) {
    setTimeout(() => {
        callback({
            eventName: 'evento8',
            eventType: 'aviso complejo',
            scheduledTime: refTime + 2500,
            refTime: Date.now(),
        });
    }, 2500);
}

const register = [];

eventOne((e1) => {
    register.push(e1);
    eventTwo((e2) => {
        register.push(e2);
        eventThree((e3) => {
            register.push(e3);
            eventFour((e4) => {
                register.push(e4);
                eventFive((e5) => {
                    register.push(e5);
                    eventSix((e6) => {
                        register.push(e6);
                        eventSeven((e7) => {
                            register.push(e7);
                            eventEight((e8) => {
                                register.push(e8);
                                console.log('Bitacora');
                                console.log(register);
                                const totalLatency = register.reduce((accum, current) => {
                                    return accum + (current.realTime - current.scheduledTime);
                                
                                }, 0);

                                const averageLatency = totalLatency / register.length;
                                console.log('Latencia promedio: ${averageLatency} ms');
                            });
                        });
                    });
                });
            });
        });
    });
});