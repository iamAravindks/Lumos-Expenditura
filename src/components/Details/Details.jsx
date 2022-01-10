import { useContext } from "react"
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core"
import { MoneyManagerContext } from "../../context/context"
import useStyles from './styles'
const Details = ({title}) =>
{
  const classes = useStyles()
  const globalState = useContext(MoneyManagerContext)
  console.log(globalState)

    return (
      <Card className={title==="Income" ? classes.income : classes.expense}>
        <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5">$100</Typography>
        </CardContent>
      </Card>
    );
}
export default Details