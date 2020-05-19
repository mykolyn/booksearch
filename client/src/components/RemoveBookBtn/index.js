import React from "react";
import Button from "../Button";



function RemoveBookBtn(props) {
    return (
   
      <Button type="danger" className="delete-btn" {...props} role="button" tabIndex="0">
        Remove
      </Button>
    
    );
  }



  export default RemoveBookBtn;