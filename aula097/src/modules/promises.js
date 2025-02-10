function promise(){
    return ((resolve, reject) => {
        setTimeout(() => {
            console.log(`sou uma promisse`)
            resolve()
        }, 2000)
    })
}

export default async function () {
    await promise()
    console.log(`terminou`)
    console.log(`teste`)
    await promise()
    console.log(`terminou`)
}