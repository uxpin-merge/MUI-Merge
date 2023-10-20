import * as React from 'react';
import Alert from '../Alert';
import AlertTitle from '../../AlertTitle/AlertTitle';
import Typography from '../../Typography/Typography';

export default <Alert uxpId="alert-1" severity='info' isOpen={true}><AlertTitle uxpId="title">Info</AlertTitle>
    <Typography variant='body2' uxpId='typography'>This is an info alert - check it out!</Typography></Alert>;
