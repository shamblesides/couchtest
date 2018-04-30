const PouchDB = require('pouchdb')
const cuid = require('cuid')

let remoteDb = new PouchDB(`http://admin:admin@127.0.0.1:5984/room_${'biggest'}`);

async function run() {
    for (let i = 1; true; ++i) {
        console.log(i)

        let puts = []
        for (let j = 0; j < 1000; ++j) {
            puts.push(
                remoteDb.put({_id:cuid(),schema:'message',type:'narrator',content:`Wacky Message ${i}, ${j}`})
            )
        }
        await Promise.all(puts)
    }
}

run()