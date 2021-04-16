# Finite State Machine Test

### Objective of the test
You shall write the code that permits to pass the provided Test. To run the tests do:

```bash
npm run test
```

### Context
The test is an implementation of a Finite-State-Machine (FSM) with states and transitions (i.e. the language of the FSM). In the context of the exercice:
- the supported transitions (i.e. the language of the FSM) are { 0, 1 }
- the FSM has 3 states only: `q1`, `q2`, and `q3`.

### How the FSM works
`q1` is our start state. We begin reading commands from here.
`q2` is our "accept" state. We return true if this is our last state.

`q1` moves to `q2` when given a 1, and stays at `q1` when given a 0.
`q2` moves to `q3` when given a 0, and stays at `q2` when given a 1.
`q3` moves to `q2` when given a 0 or 1.

### Outcome of the FSM
Our FSM should return whether we end in our "accept" state, or not (`true`/`false`.)

### Here's an example:
We make these transitions based on the input of `["1", "0", "0", "1", "0"]`,

|     |              |
| --- | ------------ |
| 1   | `q1` -> `q2` |
| 0   | `q2` -> `q3` |
| 0   | `q3` -> `q2` |
| 1   | `q2` -> `q2` |
| 0   | `q2` -> `q3` |

We end in `q3`, which is not our "accept" state, so we return `false`.

The input of `["1", "0", "0", "1", "0"]` would cause us to return `false`, as we would end in `q3`.

### Some Tips
- You shall write your code in JS
- You start with the bare bones of the Automaton class, as seen in `./src/Automaton`
- As an aside, the automaton accepts an array of strings, rather than just numbers
- you may assume you will only be passed valid inputs.
- Acceptance tests are included in the test file. Do not modify these. When all these tests pass this means your implementation is correct.

### setup the test
- Clone this repository.
- Install the dependencies: go into the fsm/ folder and run:
```bash
npm i
```


