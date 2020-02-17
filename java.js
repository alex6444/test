function check_password (input_element) {
  
    //get value of input
    var password = input_element.value;
    
    //check value and show/hide the div
    if (password == 'Jenn')
        
        document.getElementById ('hidden_div').style.display = 'block';

    else
    
        document.getElementById ('hidden_div').style.display = 'none';
  
  }