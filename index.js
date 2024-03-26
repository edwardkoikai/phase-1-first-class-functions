
function receivesAFunction(learnJs){
    learnJs()
}

function returnsANamedFunction(){
    return function learnWeb(){
        console.log("No grit no greatness")
    }
}

function returnsAnAnonymousFunction(){
    return () => console.log("Amazing am learning out here")
}