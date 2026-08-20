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

async function runEvents() {
    const register = [];

    register.push(await eventOne());
    register.push(await eventTwo());
    register.push(await eventThree());
    register.push(await eventFour());
    register.push(await eventFive());
    register.push(await eventSix());
    register.push(await eventSeven());
    register.push(await eventEight());


    console.log('Bitacora');
    console.log(register);

    const totalLatency = register.reduce((accum, current) => {
        return accum + (current.realTime - current.scheduledTime);
                                
    }, 0);

    const averageLatency = totalLatency / register.length;
    console.log('Latencia promedio: ${averageLatency} ms');

    
    

    
}