import { Card, CardContent, CardHeader, Typography } from "@material-ui/core"
import useStyles from './styles'
const Details = ({title}) =>
{
    const classes = useStyles()

    return (
      <Card className={title==="Income" ? classes.income : classes.expense}>
        <CardHeader title='Income' />
            <CardContent>
                <Typography variant="h5">$100</Typography>
        </CardContent>
      </Card>
    );
}
export default Details