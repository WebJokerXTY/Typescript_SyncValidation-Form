const sleep = (ms: number) => new Promise((resolve: Function) => setTimeout(resolve, ms));

export default (async function showResults(values: object) {
    await sleep(500);
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
});