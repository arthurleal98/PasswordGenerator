import PasswordGen from "./generator"

const Main = ()=>{
    const styleDivMain= {
        height:'100%',
        paddingBottom:'15vh',
        display:'block',
        paddingTop:'10vh'
        
    }    
    const styleH1={
        textShadow:'2px 2px 3px',
        margin:0
    }
    const styleTeste={
        display:'block',
        height:'100%'
    }
    return(
        <div style={styleDivMain}>        
            <div  className='container text-center'>
                <div style={styleTeste} >
                    <div className=' rounded' id='block-Contents'>
                        <h1 style={styleH1} className='text-white py-5'>Random Password Generator</h1>
                        <div style={styleTeste}>
                            <PasswordGen/>

                        </div>
                    </div>
                </div>
                    
            </div>
        </div>    
    )
}
export default Main;