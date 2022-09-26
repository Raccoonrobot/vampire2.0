import React from 'react'
import {Link} from 'react-router-dom'
import {Grid} from '@mui/material'

interface SectionProps {
    month: string
    title: string
}
function Section({month, title}: SectionProps) {
    return <Grid item xs={4}>
        <div className="page" id={month}>
            <h2>{title}</h2>
            <h4>These documents are Classified</h4>
            <p>Property of Operation Antigen</p>
            <Link to={"/" + month}>ICOs Activities</Link>
        </div>
    </Grid>
}

export default function Index() {
    return <>
        <header className="header">
            <h1>Vampire</h1>
            <h3>the Masquerade</h3>
        </header>
        <main>
            <div className="button">
            <button className="scott">Scott</button>
            <button className="kurt">Kurt</button>
            <button className="tyler">Tyler</button>
            <button className="mario">Mario</button>
            </div>
        </main>
        <p>
        This is a record of our tabletop game, NOT original work</p>
        <section>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                <Section month="may" title="May 6th, 2022" />
                <Section month="july" title="July 1, 2022" />
                <Section month="aug" title="August 5, 2022" />
            </Grid>
        </section>
        <footer>
            <h5>Contact me for arugments</h5> <a href="mailto:salmon_eggs@protonmail.com">Fight with Keri</a>
        </footer>
    </>
}
    


