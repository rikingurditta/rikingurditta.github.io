import NSet from "./NSet";
// the empty string, used for epsilon transitions
export var EPSILON = '';
// A class for a state in a nondeterministic finite automaton
export class NFAState {
    // create a new state, which is either accepting or non-accepting
    constructor(name, transitionDict, accepting) {
        this.name = name;
        this.transitionDict = transitionDict;
        this.accepting = accepting;
    }
    // return the states that are reached by transitioning based on symbol
    transition(symbol) {
        if (!(symbol in this.transitionDict)) {
            this.transitionDict[symbol] = new NSet();
        }
        return this.transitionDict[symbol];
    }
    // return whether or not this state is accepting
    result() {
        return this.accepting;
    }
    // add a transition rule for this state
    addTransition(symbol, state) {
        if (symbol in this.transitionDict) {
            this.transitionDict[symbol].add(state);
        }
        else {
            this.transitionDict[symbol] = new NSet([state]);
        }
    }
}
// a class for a nondeterministic finite automaton
export class NFA {
    // create a new NFA, whose starting state is start
    constructor(start, states) {
        this.start = start;
        this.states = states;
    }
    // check if an accept state is reached by this NFA after transitioning based on w
    checkString(w) {
        // return whether or not w is accepted
        let currentStates = new NSet([this.start]);
        // do initial epsilon transitions get to all starting states
        currentStates = NFA.doAllEpsilonTransitions(currentStates);
        let nextStates = new NSet();
        for (let i = 0; i < w.length; i += 1) {
            // transition based on current symbol
            nextStates = NFA.transitionStates(currentStates, w[i]);
            // do all possible epsilon transitions
            nextStates = NFA.doAllEpsilonTransitions(nextStates);
            currentStates = nextStates;
            // console.log(w[i], NFA.stateNames(currentStates));
        }
        // console.log(NFA.stateNames(currentStates));
        // if any state is an accepting state, then the NFA accepts the string
        let accepting = false;
        currentStates.forEach(function (state) {
            if (state.result()) {
                accepting = true;
            }
        });
        return accepting;
    }
    // transition all states in given set based on given symbol
    static transitionStates(states, symbol) {
        // return set of states reached
        let nextStates = new NSet();
        states.forEach((state) => nextStates.addAll(state.transition(symbol)));
        return nextStates;
    }
    // do epsilon transitions until no new state is reached
    static doAllEpsilonTransitions(states) {
        // return states (arg) as well as all states reached by doing all possible epsilon transitions
        // does not mutate states
        // e.g. if the NFA is qO -e-> q1 -e-> q2 and states is {q0}, return {q0, q1, q2}
        let tempStates = new NSet();
        while (!tempStates.equals(states)) {
            tempStates = states;
            states = states.union(NFA.transitionStates(states, EPSILON));
        }
        return states;
    }
    // return set with names of states
    static stateNames(states) {
        let names = new NSet();
        states.forEach((state) => names.add(state.name));
        return names;
    }
    // return set with names of all states in this NFA
    getStateNames() {
        return NFA.stateNames(this.states);
    }
    // return set of all accepting states in this NFA
    getAcceptingStates() {
        let out = new NSet();
        for (let state of this.states) {
            if (state.result()) {
                out.add(state);
            }
        }
        return out;
    }
    // mutating append function
    append(other) {
        // "concatenates" the NFAs, aka makes the accepting states of this
        // lead to the starting state of other
        this.getAcceptingStates().forEach(function (state) {
            state.accepting = false;
            state.addTransition(EPSILON, other.start);
        });
        this.states.addAll(other.states);
    }
}
