import axios from "axios";
import React,{useState}  from "react";
const Form = () => {

  const [url,setUrl] = useState("")
  const [viewport,setViewport] = useState({})
  console.log(viewport);
  
  const [message,setMessage] = useState("")
  const handleSubmit =async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:5000/api/convert',{url,viewport});
      setMessage(response.data)
      console.log(response.data);
      
    }catch(error){
      setMessage(error)
    }
  }
  return (
    <div className="mt-[40px] mx-[20px] p-[15px] border border-[#eee] bg-white shadow-lg rounded w-fit ">
      <h2 className="text-[20px]">Converting to figma</h2>
      <form  onSubmit={url?handleSubmit:(e)=>{e.preventDefault()}}>
        <input
          onChange={(e)=>{setUrl(e.nativeEvent.data)}}
          placeholder="please enter your page url"
          className="mt-[15px] border border-[#e9e9e9] h-[39px]
                   ps-[15px] w-[400px] max-w-[100%] block rounded"
        />
        <select 
          className="block my-[20px] w-[100%] h-[40px] border px-[10px] rounded text-blue-500"
          value={viewport}
          onChange={(e)=>{setViewport(e.target.value)}}
          
        >
          <option className="hidden" value="" selected>choose viewport</option>
          <option value="desktop">desktop</option>
          <option value="tablet">tablet</option>
          <option value="mobile">mobile</option>
        </select>
         <button type="submit" className="bg-[#eee] text-[#010101] p-2 rounded">
            Convert to Figma
        </button>
      </form>
      {
        message && <p className="text-[#666] text-[14px] mt-[10] max-[450px]:w-[100%]">{}</p>
      }
    </div>
  ); 
};

export default Form;
