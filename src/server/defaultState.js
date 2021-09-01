export const defaultState = {
    user:[
        { id: "u1", name: "Harman"},
        { id: "u2", name: "Singh"}
    ],
    groups:[
        { name: "Todo", id: "g1", owner: "u1"},
        { name: "In-progress", id: "g2", owner: "u1"},
        { name: "Done", id: "g3", owner: "u1"}
    ],
    tasks:[
        { name: "Do coding", id:"t1", owner: "u1", isComplete: false},
        { name: "Unit Testing", id:"t2", owner: "u1", isComplete: false},
        { name: "Integration Testing", id:"t2", owner: "u1", isComplete: false},
        { name: "Deployed", id:"t3", owner: "u1", isComplete: false}
    ],
    comments:[
        { owner: "u1", id: "c1", task: "t1", content: "I am working on it"}
    ]
}