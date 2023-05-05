import { Paper, Typography, Divider } from '@material-ui/core/';

import classes from './singleItemStyles.module.css';

const SingleSearchItemDetails = (props) => {
    console.log(props.location.state)

    return (
        <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h3" component="h2">Title</Typography>
                    <Typography gutterBottom variant="h6" color="textSecondary" component="h2">button
                    </Typography>
                    <Typography gutterBottom variant="body1" component="p">message</Typography>
                    <Typography variant="h6">
                        Created by:
                    </Typography>
                    <Typography variant="body1"> hours age</Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <Divider style={{ margin: '20px 0' }} />
                </div>
                <div className={classes.imageSection}>
                    <img className={classes.media} src={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt="" />
                </div>
            </div>
        </Paper>
    )
}

export default SingleSearchItemDetails