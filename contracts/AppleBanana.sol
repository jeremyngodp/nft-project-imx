pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@imtbl/imx-contracts/contracts/Mintable.sol";

contract AppleBanana is ERC721Enumerable, Mintable{
    
string private _currentBaseURI;
    address public _owner;
    string private baseURI;
    uint MAX_SUPPLY = 10000;

    constructor(address _imx, string  memory _baseUri)
        ERC721("AppleBanana", "AB")
        Mintable(msg.sender, _imx)
    {
        setBaseURI(_baseUri); //set to the unrevealed URI
        _owner = msg.sender;
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(_owner).transfer(balance);
    }

    // to be used for late-reveal
    function setBaseURI(string memory _baseUri) public onlyOwner {
        baseURI = _baseUri;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }
    
    function _mintFor(
        address user,
        uint256 id,
        bytes memory
    ) internal override {
        _safeMint(user, id);
    }

}