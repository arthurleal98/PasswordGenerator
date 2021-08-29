import { useEffect, useState } from "react";

const PasswordGen = ()=>{
    const [password,setPassword] = useState('');
    const [number,setNumber] = useState(false);
    const [special,setSpecial] = useState(false);
    const [upper,setUpper] = useState(false);
    const [characters, setCharacters] = useState(6);
    const [query, setQuery] =useState('');
    const [button,setButton] = useState(true); 
    useEffect(()=>{
        
        const LoadingApi= async()=>{
            try{
                const grossdata = await fetch(`https://passwordinator.herokuapp.com/generate?${query}`);
                const faceteddata = await grossdata.json();
                setPassword(faceteddata['data']);
            }
            catch(e){
                console.log(e)
            }
        };
        
        LoadingApi();
        
        
    },[query,button])
    const styleMain={
        height:'100%',
        marginTop:'',
        backgroundColor:'#0C2D48',
    }
    const styleContents={
        width:'100%',
        display:'block',
        backgroundColor:'#B1D4E0'
    }   
    const submitbutton=(e)=>{
        let items = '';
        if(number){
            items+='&num=true'
        }
        if(special){
            items+='&char=true'
        }
        if(upper){
            items+='&caps=true'
        }
        items+=characters;
        setQuery(items);
        if(button){
            setButton(false)
        }
        else{
            setButton(true)

        }

    }
    const styleP={
        height:'100%',
        wordBreak:'break-all',
        fontSize:'18px'
    }
    const stylePass={
        backgroundColor:'#2E8BC0',
        
        
    }
    return(
        <div className='container  align-items-center justify-content-center py-3' style={styleMain}>
            
            <div className=' px-5 pt-5 pb-4 rounded  container' style={styleContents}>
                    <label><h3>Password</h3></label>
                    <div className="container rounded text-white shadow-lg" style={stylePass}>
                            <p className=' py-3 text-wrap px-3' style={styleP}>{password}</p>
                    </div>
                    <div id='checkTypes' className='d-flex   justify-content-center py-3'>
                        <div className='d-flex flex-column '>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" checked={number} onChange={(e)=>{setNumber(e.target.checked)}}/>
                                <label className="form-check-label" >Numbers</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" checked={special} onChange={(e)=>{setSpecial(e.target.checked)}}/>
                                <label className="form-check-label" >Special character</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" checked={upper} onChange={(e)=>{setUpper(e.target.checked)}}/>
                                <label className="form-check-label" >Upper Case</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="number" id="inlineNumber" min='6' max='100' onChange={(e)=>{setCharacters(`&len=${e.target.value}`)}}/>
                                <label className="form-check-label" >Characters</label>
                            </div>
                        </div>

                    
                    </div>
                    <div>
                        <button className='btn btn-primary' onClick={()=>{submitbutton()}}>Generate</button>
                    </div>
            </div>
        </div>
    )
}
export default PasswordGen;