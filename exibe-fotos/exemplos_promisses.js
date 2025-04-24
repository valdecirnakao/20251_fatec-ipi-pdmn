//async/await
function fatorial (n) {
    return new Promise((resolve, reject) => {
        if (n >= 0) {
        let ac = 1
        for (let i=2; i<=n; i++) 
            ac *= i
        resolve(ac)
    }
    else
    {
        reject('Somente positivos')
    }})
}

const chamadaComAsyncAwait = async() => {
    try {
        const f1 = await fatorial(5)
        console.log(f1)
    } catch (err) {
        console.log(err)
    }

    try {
        const f2 = await fatorial(-1)
        console.log(f2) // Added to log the result of fatorial(-1)
    }
    catch (err) {   
        console.log(err)
    }
}

chamadaComAsyncAwait()
console.log('Outras coisas')

// fatorial(5).then((f)=>console.log(f))

// async function fatorial (n) {
//     let ac = 1
//     for (let i=2; i<=n; i++) 
//         ac *= i
//     return ac
// }
// const r1 = fatorial(5)
// console.log(r1) 
// sincrono
// const r1 = fatorial(5)
// console.log(r1)
// // //1 + 2 + 3 + ... + (n - 2) + n
// const somaDemorada = (n) => {
//     const p = new Promise((resolve, reject) => {
//         if(n>=1) {
//             let ac = 0
//             for (let i=1; i <= n; i++) 
//                 ac += i
//             resolve(ac)
//         }        
//         else {
//             reject('Somente valores positivos')
//         }
//     })
//     return p
// } 
//Promisses
//const res = somaDemorada(-10)
//then
//catch
// res
// .then((soma) => {
//     console.log(`Soma: ${soma}`)
//     p2.then((r2) => {
//         p3.then((r3) => {
//             p4.then((r4) => {
//                 p5.then((r5) => {

//                 })
//             })
//         })
//     })
// })
// .catch((err) => console.log(`Erro: ${err}`))

// console.log('outras coisas')






//Processamento sem promisses
// const somaDemorada = (n) => {
//     let ac = 0
//     for (let i = 1; i <= n; i++)
//         ac += i
//     return ac
// }

// //processamento blqueante ou síncrono
// const res = somaDemorada(10)
// console.log(res)
// console.log('qualquer outra coisa que nao depende do res')

