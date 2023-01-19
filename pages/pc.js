import pc from 'styles/pc.module.css'

const Pc = () => {
    return(
        <>
            <div className={pc.pc}>
                <div className={pc.pc_head}>
                    <div className={pc.display_outer}>
                        <div className={pc.display_inner}></div>
                        <div className={pc.camera}></div>
                    </div>
                </div>
                <div className={pc.pc_body}>
                    <div className={pc.body_inner}>
                        <div className={pc.hollow}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pc