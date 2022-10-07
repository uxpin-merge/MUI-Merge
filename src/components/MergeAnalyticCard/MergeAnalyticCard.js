import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { Box, Chip, Grid, Stack, Typography, Card } from '@mui/material';

// project import
// import MainCard from 'components/MainCard';

// assets
// import { RiseOutlined, FallOutlined } from '@ant-design/icons';
import Icon from '../Icon/Icon';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const MergeAnalyticCard = ({ color, title, count, percentage, isLoss, children }) => (
    <Card sx={{ p: 2.25 }}>
        <Stack spacing={0.5}>
            <Typography variant="body-1" color="textSecondary" sx={{ fontSize: '20px' }}>
                {title}
            </Typography>
            <Grid container alignItems="center">
                <Grid item>
                    <Typography variant="h6" color="inherit">
                        {count}
                    </Typography>
                </Grid>
                {percentage && (
                    <Grid item>
                        <Chip
                            variant="combined"
                            color={color}
                            icon={
                                <>
                                    {!isLoss && <Icon style={{ fontSize: '0.9rem', color: 'inherit' }}>trending_up</Icon>}
                                    {isLoss && <Icon style={{ fontSize: '0.9rem', color: 'inherit' }}>trending_down</Icon>}
                                </>
                            }
                            label={`${percentage}%`}
                            sx={{ ml: 1.25, pl: 1 }}
                            size="small"
                        />
                    </Grid>
                )}
            </Grid>
        </Stack>
        <Box sx={{ pt: 2.25 }}>
            <Typography variant="caption" color="textSecondary">
                You 
                {!isLoss && " made"}
                {isLoss && " spent"}
                {' '}
                <Typography component="span" variant="caption" sx={{ color: `${color || 'primary'}.main`, fontWeight:"bold" }}>
                    {children}
                </Typography>{' '}
                this year
            </Typography>
        </Box>
    </Card>
);

MergeAnalyticCard.propTypes = {
    color: PropTypes.oneOf(['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning']),
    title: PropTypes.string,
    count: PropTypes.string,
    percentage: PropTypes.string,
    isLoss: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

MergeAnalyticCard.defaultProps = {
    color: 'success'
};

export default MergeAnalyticCard;
