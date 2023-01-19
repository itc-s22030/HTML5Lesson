import web from 'styles/web.module.css'
const Home = () => {
    return(
        <>
            <div className={web.header}>
                <h1>Sample Website</h1>
            </div>
            <div className={web.main}>
                <h2>Heading</h2>
                <p>
                Content comes here. Content comes here. Content comes here.
                <br /> Content comes here. Content comes here. Content comes here.
                </p>
                <h2>Heading 2</h2>
                <p>
                Content comes here. Content comes here. Content comes here.
                <br /> Content comes here. Content comes here. Content comes here.
                </p>
            </div>
            <div className={web.footer}>
                <p>Copyright (c) 2013 xxxxxxxx. All rights reserved.</p>
            </div>
        </>
    )
}

export default Home