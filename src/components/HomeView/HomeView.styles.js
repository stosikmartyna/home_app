import { css } from 'emotion';

export const homeView = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
})

export const container = css({
    height: '500px',
    padding: '2rem',
    textAlign: 'center',      
    width: '500px',

    '& h1': {
        letterSpacing: '-.1rem',
        margin: 0,
        textTransform: 'uppercase',
    },

    '& h2': {
        color: '#38AEFE',
        fontSize: '1rem',
        letterSpacing: '-.1rem',
        margin: 0,
        textTransform: 'uppercase',
    },

    '& button': {
        border: '2px solid #38AEFE',
        color: '#38AEFE',
        backgroundColor: 'white',
        fontWeight: 'bold',
        padding: '.5rem 1rem',
        textTransform: 'uppercase',
    }
})

export const boxContainer = css({
    display: 'flex',
    flexWrap: 'wrap',
    height: '566px',     
    width: '566px',

    '& :nth-child(1)': {
        backgroundColor: 'red',
    },
    '& :nth-child(2)': {
        backgroundColor: 'blue',
    },
    '& :nth-child(3)': {
        backgroundColor: 'green',
    },
    '& :nth-child(4)': {
        backgroundColor: 'purple',
    },
})

export const box = css({
    height: '50%',
    width: '50%',
})

export const textContainer = css({
    backgroundColor: 'lightBlue',
    height: '500px',
    fontSize: '2rem',
    padding: '2rem',
    textAlign: 'center',      
    width: '500px',

    '& p': {
        margin: '3rem',
    }
})