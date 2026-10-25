const Contact = ()=>{
    return(
        <div>
            <h1 className="text-3xl m-4 p-4 font-bold">Contact Us Page</h1>
            <form>
                <input placeholder="Name" className="border border-black m-4 p-4" type="text"></input>
                <input placeholder="Message" className="border border-black m-4 p-4" type="text"></input>
                <button className="bg-orange-400 text-white p-4  rounded-lg font-semibold">Submit</button>
            </form>
            
        </div>
    )
}

export default Contact