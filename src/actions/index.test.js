import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
    it ('returns an action with type CORRECT_GUESS', () => {
        const action = correctGuess();
        console.log(wrap.debug())
        expect(action).toEqual({});
    });
});