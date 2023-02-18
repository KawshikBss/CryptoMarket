// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract WhatNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // mapping to store the metadata for each token ID
    mapping (uint256 => string) private _tokenURIs;

    constructor() ERC721("WhatNFT", "WNFT") {}

    function mintNFT(address recipient, string memory _tokenURI) public returns (uint256) {
        _tokenIds.increment();

        uint256 newTokenId = _tokenIds.current();
        _mint(recipient, newTokenId);

        // store the metadata URI for the new token ID
        _tokenURIs[newTokenId] = _tokenURI;

        return newTokenId;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        // check that the token ID exists
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        // return the metadata URI for the token ID
        return _tokenURIs[tokenId];
    }

    function totalSupply() public view returns (uint256) {
        return _tokenIds.current();
    }
}
