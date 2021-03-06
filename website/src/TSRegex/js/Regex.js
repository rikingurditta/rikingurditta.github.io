import NSet from "./NSet";
import { EPSILON, NFAState, NFA } from "./NFA";
// abstract class for parsed regular expressions
export class Regex {
    // get the NFA which accepts the strings matched by this regex
    getNFA() {
        throw new Error('Not implemented!');
    }
}
let count = 0;
// parsed regular expression for a single symbol
export class RESymbol extends Regex {
    // create a new symbol regex
    constructor(symbol) {
        super();
        if (symbol.length != 1) {
            throw Error("Not a symbol!");
        }
        this.symbol = symbol;
    }
    // get the NFA which accepts this regex's symbol 
    getNFA() {
        let reject = new NFAState(this.symbol + "0" + count++, {}, false);
        let accept = new NFAState(this.symbol + "1" + count++, {}, true);
        reject.addTransition(this.symbol, accept);
        let states = new NSet([reject, accept]);
        return new NFA(reject, states);
    }
}
// parsed regular expression for a sequence of regexes
export class REConcat extends Regex {
    // create a new sequence of regexes
    constructor(reList) {
        super();
        this.subs = reList;
    }
    // get the NFA which accepts this sequence of regexes
    getNFA() {
        // why was i filtering out empty sequences?
        // keeping this code here in case i realize it's necessary
        // if (this.subs.length == 0) {
        // 	let s = new NFAState("empty sequence", {}, false);
        // 	return new NFA(s, new NSet([s]));
        // }
        // concatenate all NFAs in order to make NFA which accepts sequence
        let startState = new NFAState("start_concat", {}, true);
        let start = new NFA(startState, new NSet([startState]));
        for (let x of this.subs) {
            start.append(x.getNFA());
        }
        return start;
    }
}
// parsed regular expression for applying {num} to a regex,
// aka repeating a regex num times
export class RERepeat extends Regex {
    // create a new repeat regex
    constructor(regex, minNum, maxNum) {
        super();
        this.inside = regex;
        this.minNum = minNum;
        this.maxNum = maxNum;
    }
    // get the NFA which accepts num repetitions of the inside regex
    getNFA() {
        let orList = [];
        for (let i = this.minNum; i <= this.maxNum; i += 1) {
            let concatList = [];
            for (let j = 0; j < i; j += 1) {
                concatList.push(this.inside);
            }
            orList.push(new REConcat(concatList));
        }
        return new REOr(orList).getNFA();
    }
}
// parsed regular expression for applying * to a regex, aka repeating it
// an arbitrary number of times
export class REStar extends Regex {
    // create a new star regex
    constructor(regex) {
        super();
        this.inside = regex;
    }
    // get the NFA which accepts arbitrary repetitions of the inside regex
    getNFA() {
        let start = new NFAState("*start", {}, true);
        let out = new NFA(start, new NSet([start]));
        let insideNFA = this.inside.getNFA();
        for (let state of insideNFA.getAcceptingStates()) {
            state.addTransition(EPSILON, insideNFA.start);
        }
        out.append(insideNFA);
        start.accepting = true;
        return out;
    }
}
// parsed regular expression for applying * to a regex
export class REPlus extends Regex {
    // create a new star regex
    constructor(regex) {
        super();
        this.inside = regex;
    }
    // get the NFA which accepts arbitrary repetitions of the inside regex
    getNFA() {
        return new REConcat([this.inside, new REStar(this.inside)]).getNFA();
    }
}
export class REOr extends Regex {
    constructor(subs) {
        super();
        this.subs = subs;
    }
    getNFA() {
        let start = new NFAState("orstart", {}, false);
        let states = new NSet([start]);
        for (let s of this.subs) {
            let curr = s.getNFA();
            start.addTransition(EPSILON, curr.start);
            states.addAll(curr.states);
        }
        return new NFA(start, states);
    }
}
let r = new RERepeat(new RESymbol('a'), 2, 3);
// let r = new REConcat([new RESymbol('a'), new RESymbol('a')]);
let n = r.getNFA();
// console.log(n.getStateNames());
// console.log(n.checkString(''), '');
// console.log(n.checkString('a'), 'a');
// console.log(n.checkString('aa'), 'aa');
// console.log(n.checkString('aaa'), 'aaa');
// console.log(n.checkString('aaaa'), 'aaaa');
// console.log(n.checkString('aaaaa'), 'aaaaa');
// console.log(n.checkString('aaaaaa'), 'aaaaaa');
// console.log(n.checkString('aaaaaaa'), 'aaaaaaa');
// console.log(n.checkString('aaaaaaaa'), 'aaaaaaaa');
