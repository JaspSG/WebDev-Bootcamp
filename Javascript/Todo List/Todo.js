window.setTimeout(function () {
    // put all of your JS code from the lecture here

    let todos = ["Buy new turtle"];

    let input = prompt("What would you like to do?");

    while (input !== 'quit') {
        if (input === 'list') {
            console.log(todos);
        }

        else if (input === 'new') {
            let newtodo = prompt("Enter new todo");
            todos.push(newtodo);
        }

        input = prompt("what would you like to do?")
    }

    console.log("Okay you quit.")








}, 500);


