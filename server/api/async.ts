function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

// #### Async function
// ###  An async function declaration defines an asynchronous function that returns an AsyncFunction object. Asynchronous functions run over the event loop outside the usual control flow, and return an implicit Promise object as a result.

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}

export default async (req, res) => {
    await asyncCall()

    return {
        someData: true
    }
}