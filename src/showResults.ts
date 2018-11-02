function sleep(ms: number) {
    new Promise((resolve: Function) =>{
        setTimeout(resolve, ms);
        resolve();
    });
};

export function showResults(values: object) {
    sleep(500);
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
};