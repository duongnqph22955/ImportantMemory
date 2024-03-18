import { useState, useEffect } from "react";
import axios from "axios";



const CreateNFT = () => {
 
const [file, setfile] = useState(null);
const [network, setnetwork] = useState("devnet");
const [publicKey, setPublicKey] = useState('7Skzcjbq4ZmWzU4ubFCpSP9qXrdYi2EF248TPBHDGod7'); //your wallet's public key
const [name, setName] = useState(null);
const [symbol, setSymbol] = useState(null);
const [desc, setDesc] = useState(null);
const [attr, setAttr] = useState(null);
const [extUrl, setExtUrl] = useState(null);
const [maxSup, setMaxSup] = useState(0);
const [roy, setRoy] = useState(1);

const [status, setStatus] = useState("Awaiting Upload");
const [dispResponse, setDispResp] = useState("");


const mintNow = (e) => {
    e.preventDefault();
    setStatus("Loading");
    let formData = new FormData();
    formData.append("network", network);
    formData.append("wallet", publicKey);
    formData.append("name", name);
    formData.append("symbol", symbol);
    formData.append("description", desc);
    formData.append("attributes", JSON.stringify(attr));
    formData.append("external_url", extUrl);
    formData.append("max_supply", maxSup);
    formData.append("royalty", roy);
    formData.append("file", file);
    
    axios({
        // Endpoint to send files
        url: "https://api.shyft.to/sol/v1/nft/create_detach",
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
            "x-api-key": "Your-api-key",
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
        },
    
        // Attaching the form data
        data: formData,
    })
        // Handle the response from backend here
        .then(async (res) => {
            console.log(res);
            if(res.data.success === true)
            {
                setStatus("success: Transaction Created. Signing Transactions. Please Wait.");
                const transaction = res.data.result.encoded_transaction; //encoded transaction
                // setSaveMinted(res.data.result.mint);
                // const ret_result = await signAndConfirmTransactionFe(network,transaction,callback); //signing the encoded transaction
                //     console.log(ret_result);
                // setDispResp(res.data);
                
            }
        })
    
        // Catch errors if any
        .catch((err) => {
            console.warn(err);
            setStatus("success: false");
        });
    
    }
    



return (
  <div className="App">
    <form>
      <label htmlFor="file">Select File</label>
      <input name="file" type="file" onChange={(e) => {
        setfile(e.target.files[0]);
      }} 
      />
      <br />

      <label htmlFor="network">
        Network <span>(network: string)</span>
      </label>
      <select name="network" onChange={(e) => { setnetwork(e.target.value) }}>
        <option value="devnet">Devnet</option>
        <option value="testnet">Testnet</option>
        <option value="mainnet-beta">Mainnet Beta</option>
      </select>
      <br />

      <label>Public Key (wallet:string)</label>
      <input type="text" value={publicKey} onChange={(e) => setPublicKey(e.target.value)} required />
      <br />

      <label htmlFor="name">Name (name:string)</label>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      <br />

      <label htmlFor="symbol">Symbol (symbol:string)</label>
      <input type="text" name="symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} required />
      <br />

      <label htmlFor="desc">Description (description:string)</label>
      <textarea name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} required></textarea>
      <br />

      <label htmlFor="attributes">Attributes (attributes:string)</label>
      <textarea name="attributes" value={attr} onChange={(e) => setAttr(e.target.value)} required></textarea>
      <br />

      <label htmlFor="external_url">External Url (external_url:string)</label>
      <input type="text" name="external_url" value={extUrl} onChange={(e) => setExtUrl(e.target.value)} />
      <br />

      <label htmlFor="max_supply">Max Supply (max_supply:number)</label>
      <input type="number" name="max_supply" value={maxSup} onChange={(e) => { setMaxSup(e.target.value) }} required />
      <br />

      <label htmlFor="royalty">Royalty (royalty:number)</label>
      <input type="number" name="royalty" value={roy} onChange={(e) => { setRoy(e.target.value) }} required />
      <br />

      <button type="submit" onClick={mintNow}>
        Submit
      </button>
    </form>

    <textarea
      className="form-control"
      name=""
      value={JSON.stringify(dispResponse)}
      id=""
      cols="30"
      rows="10"
    ></textarea>
  </div>
)
    }
export default CreateNFT;
