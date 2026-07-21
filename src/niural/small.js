// Local state, possibly stale
const local = [
    { id: 1, title: "Draft post", updatedAt: "2026-05-20T10:00:00Z" },
    { id: 2, title: "Old notes", updatedAt: "2026-05-19T14:00:00Z" },
    { id: 3, title: "Local only", updatedAt: "2026-05-21T09:00:00Z" },
];

// Fresh from server
const server = [
    { id: 1, title: "Updated post", updatedAt: "2026-05-21T08:00:00Z" },
    { id: 2, title: "Old notes", updatedAt: "2026-05-19T12:00:00Z" },
    { id: 4, title: "Server only", updatedAt: "2026-05-21T07:00:00Z" },
];

// expected

// const expected = [
//     { id: 1, title: "Updated post", updatedAt: "2026-05-21T08:00:00Z" },
//     { id: 2, title: "Old notes", updatedAt: "2026-05-19T14:00:00Z" },
//     { id: 3, title: "Local only", updatedAt: "2026-05-21T09:00:00Z" },
//     { id: 4, title: "Server only", updatedAt: "2026-05-21T07:00:00Z" },
// ]

function transformState(local, server) {


    let dictonary = {};

    let combined = [...local, ...server];

    combined.forEach((item) => {
        if( !dictonary[item.id] ) {
            dictonary[item.id] = item;
        }
        else{
            if(new Date (item.updatedAt) > new Date(dictonary[item.id].updatedAt)){
                dictonary[item.id] = item;
            }
        }
    } )

    return Object.values(dictonary);
}

transformState(local, server);