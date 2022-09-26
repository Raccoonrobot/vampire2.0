import React from 'react'
import {Link} from 'react-router-dom'

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
            <div className="page" id="may">
                
            <h2>May 6th, 2022</h2>
            <h4>These documents are Classified</h4>
            <p>Property of Operation Antigen</p>
            <Link to="/may">ICOs Activities</Link>

            </div>

            <div className="page" id="july">

                <h4>July 1, 2022</h4>
                <h4>These documents are Classified</h4>
            <p>Property of Operation Antigen</p>
            <Link to="/july">ICOs Activities</Link>
            </div>
            

            <div className="page" id="august">

                    <h4>August 5, 2022</h4>
                    <h4>These documents are Classified</h4>
                    <p>Property of Operation Antigen</p>
                    <Link to="/aug">ICOs Activities</Link>
            </div>
                
        </section>
        <footer>
            <h5>Contact me for arugments</h5> <a href="mailto:salmon_eggs@protonmail.com">Fight with Keri</a>
        </footer>
    </>
}
    


