pragma solidity ^0.4.8;
contract Entité {
    
    // Element of the proposition to accept
    string public name;
    address creator;
  
    // Un peu comme des listes
    mapping (address=> bool) public citoyens;
    mapping (address => uint) public soldes;
    


    modifier CitoyenAlreadyExist() {
        if(citoyens[msg.sender]!= true) throw;
        _;
    }


    //Functions to add a citoyen
 function add() CitoyenAlreadyExist() {
        citoyens[msg.sender] = true;
        soldes[msg.sender] = 0.005;
    }


    //Functions of transfert
    function transfert(address destinataire,uint somme_versé) transactionisAvailable() public return (bool){
            if(soldes[msg.sender]<somme_versé) throw;
    	    if(citoyens[destinataire]==true){
                soldes[msg.sender]-=somme_versé // on enleve la somme versé
                soldes[destinataire]+=somme_versé // on ajoute la somme versé
                return true;
            }
            else{
            	return false
            }
    }
}