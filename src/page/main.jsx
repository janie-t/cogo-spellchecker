import React, { useState, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {DoneOutline, MoodBad} from '@material-ui/icons';

import './main.css';

import listOfWords from '../data/listOfWords';

//In development this will give me a quick visual
//check that the word does exist in the list.
console.log('listOfWords', listOfWords);

const Main = () => {
    //Use state to hold the current word being entered and a boolean if it is correct in 'result'.
    const [currentWord, setCurrentWord] = useState('');
    const [result, setResult] = useState(null);
    //If it is wrong, search for some other potential matches
    const [matches, setMatches] = useState([]);

    const handleTextChange = value => {
        //reset this state back to null for the css to go back to default
        setResult(null);
        //reset the matches state
        setMatches([])
        //set the word in state
        setCurrentWord(value);
    }

    const handleButtonClick = () => {
        const wordIsCorrect = listOfWords.includes(currentWord.toLowerCase());
        setResult(wordIsCorrect);
        if(!wordIsCorrect) {
            const possibleMatches = listOfWords.filter(word => word.startsWith(currentWord));
            setMatches(possibleMatches);
        }
    }

    return (
        <Container>
            <div className="content-wrapper">
              
                <TextField id="search-box" label="Enter word..." variant="outlined" onChange={e => handleTextChange(e.target.value)} />
                {currentWord &&
                <Fragment>
                    <p>Check this word:</p>
                    <div className="result">
                        <h2 className={result === null ? '' : result ? 'correct' : 'wrong'}>{currentWord.toLowerCase()}</h2>
                        {result === null ? null : result ? <DoneOutline style={{ color: 'green' }}/> : <MoodBad  style={{ color: 'red' }}/>}
                    </div>
                </Fragment>
                }
                {matches.length ?
                <div>
                    <p>Did you mean...</p>
                    {matches.map(match => <p key={match}><i>{match}</i></p>)}
                </div> : null
                }
                <Button variant="contained" color="primary" onClick={handleButtonClick}>
                    Check now!
                </Button>
            </div>
        </Container>
    );
};

export default Main;
