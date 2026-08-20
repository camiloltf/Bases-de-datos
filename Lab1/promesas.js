const refTime = Date.now();

function eventOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                eventName: 'evento1',
                eventType: 'aviso simple',
                scheduledTime: refTime + 500,
                realTime: Date.now(),
            });
        }, 500);
    });
};

function eventTwo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                eventName: 'evento2',
                eventType: 'aviso complejo',
                scheduledTime: refTime + 2000,
                realTime: Date.now(),
            });
        }, 2000);
    });
};

function eventThree() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                eventName: 'evento3',
                eventType: 'aviso simple',
                scheduledTime: refTime + 1100,
                realTime: Date.now(),
            });
        }, 1100);
    });
};

function eventFour() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                eventName: 'evento4',
                eventType: 'aviso complejo',
                scheduledTime: refTime + 4800,
                realTime: Date.now(),
            });
        }, 4800);
    });
};

function eventFive() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                eventName: 'evento5',
                eventType: 'aviso simple',
                scheduledTime: refTime + 1900,
                realTime: Date.now(),
            });
        }, 1900);
    });
};

function eventSix() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                eventName: 'evento6',
                eventType: 'aviso complejo',
                scheduledTime: refTime + 2700,
                realTime: Date.now(),
            });
        }, 2700);
    });
};

function eventSeven() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                eventName: 'evento7',
                eventType: 'aviso simple',
                scheduledTime: refTime + 4000,
                realTime: Date.now(),
            });
        }, 4000);
    });
};

function eventEight() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                eventName: 'evento8',
                eventType: 'aviso complejo',
                scheduledTime: refTime + 3400,
                realTime: Date.now(),
            });
        }, 3400);
    });
};

const register = [];

eventOne()
.then((evento1) => {
    register.push(evento1);
    return eventTwo();
})
.then((evento2) => {
    register.push(evento2);
    return eventThree();
})
.then((evento3) => {
    register.push(evento3);
    return eventFour();
})
.then((evento4) => {
    register.push(evento4);
    return eventFive();
})
.then((evento5) => {
    register.push(evento5);
    return eventSix();
})
.then((evento6) => {
    register.push(evento6);
    return eventSeven();
})
.then((evento7) => {
    register.push(evento7);
    return eventEight();
})
.then((evento8) => {
    register.push(evento8);
    console.log('Bitacora');
    console.log(register);
    const totalLatency = register.reduce((accum, current) => {
        return accum + (current.realTime - current.scheduledTime);
                                
    }, 0);

    const averageLatency = totalLatency / register.length;
    console.log('Latencia promedio: ${averageLatency} ms');
});

