/**
 * Minting using IMX API
 * 
 */

/**
 * Payload
 * 
{
    "mints":
    [{
        "user": "0x...", -> address of receiver
        "tokens": [{
        "type": "ERC721",
        "data": {
            "id": "<asset ID>", get by calling tokenSupply()
            "blueprint": "<on-chain metadata>", -> we dont have any
            "token_address": "0x..." -> token contract address
        }
        }],
        "auth_signature": "0x..." // signature signed by the contract owner -> need to generate
    }]    
}
 */

