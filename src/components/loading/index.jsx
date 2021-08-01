import React, {useState} from 'react'
import { LinearProgress } from '@material-ui/core'

export const Loading = () => {
    const [progress, setprogress] = useState(5)
    return (
        <div>
            <h5>Loading Terminal...</h5>
            <LinearProgress variant="determinate" value={progress} />
        </div>
    )
}
