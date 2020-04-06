console.log("linked with js");
window.addEventListener('scroll', function() {
    let position = window.pageYOffset;
    let left_element = document.getElementsByClassName('left-nav')[0];
    let top_element = document.getElementsByClassName('top-nav')[0];
    // console.log(element);
    if(position>165 && position<1200 && this.screen.width>800)
       left_element.style.visibility = 'visible';
    else    
        left_element.style.visibility = 'hidden';
    if(screen.width<=800 && position>235)
       top_element.style.visibility = 'visible';
    else    
        top_element.style.visibility = 'hidden';
    // if(position === 150)
    //     element.style.visibility = 'hidden';
        
    // document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
  });