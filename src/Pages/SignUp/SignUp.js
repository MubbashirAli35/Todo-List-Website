import React from 'react';
import {Grid,
        TextField,
        Button} from '@material-ui/core';

import './SignUp.css';

export default function SignUp(props) {
    return(
        <Grid className='mainContainer' container max-width='xl'>
            <Grid item style={{ width: '40vw' }}>
                <Grid className='signUpFormContainer' container>
                    <h2>Sign Up</h2>
                    <form className='mainForm'>
                        <TextField id='name' 
                            label='Name' 
                            variant='outlined'
                            fullWidth
                            style={{ paddingBottom: '2rem' }} />
                        <TextField id='email' 
                            label='Email' 
                            variant='outlined'
                            required
                            fullWidth
                            style={{ paddingBottom: '2rem' }} />
                        <TextField id='password' 
                            label='Password' 
                            variant='outlined'
                            type='password'
                            required
                            fullWidth
                            style={{ paddingBottom: '2rem' }} />
                        <Button style={{ backgroundColor: '#3091c9', color: '#ffffff', marginBottom: '0.5rem' }}>
                            Sign Up
                        </Button>
                        <div style={{ marginRight: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <p>Already have an account?</p>
                            <a href='#' style={{ paddingLeft: '0.3rem' }}>Sign in</a>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
}

