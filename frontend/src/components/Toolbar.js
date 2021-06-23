import React from "react"
import styles from '../main.scss'
import { useHistory, withRouter } from 'react-router'
import { 
    BottomNavigation,
    BottomNavigationAction,
    Tooltip
 } from "@material-ui/core"
 import {
     Add
 } from '@material-ui/icons'


var Toolbar = () => {

    const history = useHistory()

    var items = [
        {
            name: "Projects",
            icon: <Add className={styles.icon} />,
            onclick: () => history.push("/projects")
        },
        {
            name: "Home",
            icon: <Add className={styles.icon} />,
            onclick: () => history.push("/")
        },
        {
            name: "User",
            icon: <Add className={styles.icon} />,
            onclick: () => history.push("/user")
        }

    ]

    return(
        <BottomNavigation className={styles.toolbar}>
            {
                items.map((item) => (
                    <Tooltip key={item.name.toLowerCase()} title={<h2 className={styles.topoltip}>{item.name}</h2>}>
                        <BottomNavigationAction key={item.name.toLowerCase()} icon={item.icon} onClick={item.onclick} showLabel={false} classes={{wrapper: styles.wrapper, root: styles.bottomNavAction}} />
                    </Tooltip>
                ))
            }
        </BottomNavigation>
    )
}

export default withRouter(Toolbar)