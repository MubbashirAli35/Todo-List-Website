import React from 'react';
import {Grid,
        TextField,
        Button} from '@material-ui/core';

import './SignIn.css';

export default function SignIn(props) {
    return(
        <Grid className='mainContainer' container max-width='xl'>
            <Grid item md='4' xs='10'>
                <Grid className='signUpFormContainer' container>
                    <h2>Sign In</h2>
                    <form className='mainForm'>
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
                            Sign In
                        </Button>
                        <div style={{ marginRight: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <p>Not registered yet?</p>
                            <a href='#' style={{ paddingLeft: '0.3rem' }}>Register here</a>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
}