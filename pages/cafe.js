import cafe from 'styles/cafe.module.css'

const Cafe = () => {
    return (
        <div className={cafe.body}>
            <div className={cafe.box}>
                <div className={cafe.boxhead}>
                    <h1>Cafe Prep</h1>
                </div>
                <nav className={cafe.boxbody}>
                    <h2>Drink</h2>
                    <ul>
                        <li>Coffee</li>
                        <li>Latte</li>
                        <li>Espresso</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Cafe