import React from 'react'
import styles from '../main.scss'
import { 
    Typography,
    Divider
 } from "@material-ui/core"


class Homepage extends React.Component{

    // eslint-disable-next-line no-useless-constructor
/*     constructor(props){
        super(props)
    }

    componentWillUnmount() {
        this.props.changeBg()
    } */

    render() {
        return(
            <div className="container">
            <Typography variant="h3" component="h1" className="header">
                Ottos Atlas
            </Typography>
            <br/>
            <Typography variant="h3" component="h2" className="text">
                Vil du eller ditt barn lære deg programmering? Jeg har tidligere vært programmeringsinstruktør for Icenet og har god kunnskap innenfor diverse programmeringsspråk.
                Første timen er gratis slik at vi kan diskutere hva du vil få ut av timene og hva du vil lære.
                Deretter koster det 150kr pr. time.
            </Typography>
            <Divider className="divider"/>
            <Typography variant="h3" component="h2" className="text">
                Do you or your child want to learn programming? I was a programming instructor for Icenet and i have alot of knowledge in a multitude of different programming languages.
                The first hour is free so that we can discuss what you want to learn and how you want to learn it. After that each hour costs 150kr.
            </Typography>

            <Typography variant="h3" component="h2" className="text">
                Email: otto@ottosatlas.com
            </Typography>
            <br />

            </div>
        )
    }

}

export default Homepage
