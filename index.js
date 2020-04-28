console.log("linked with js");
window.addEventListener('scroll', function() {
    let position = window.pageYOffset;
    let left_element = document.getElementsByClassName('left-nav')[0];
    let top_element = document.getElementsByClassName('top-nav')[0];
    let focus_element = document.getElementsByClassName('change-color')[0];
    let left_nav_element = document.getElementsByClassName('change-border-color');
    console.log(position);
    if(position<165)
        left_element.style.visibility = 'hidden';
    if(position>1200&& this.screen.width>800)
        {
            left_element.style.left = '90%';
            left_element.style.top = '60%';
            left_element.style.visibility = 'visible';

        }
    else    
        left_element.style.left = '0';
    if(position>165 && position<1200 && this.screen.width>800)
       left_element.style.visibility = 'visible';
    // else    
    //     {
    //         left_element.style.visibility = 'hidden';
    //         if(position>1400)
    //             {
    //                 // left_element.style.visibility = 'visible';
    //                 // left_element.style.left = "80%";

    //             }
    //     }
    if(screen.width<=800 && position>235)
       top_element.style.visibility = 'visible';
    else    
        top_element.style.visibility = 'hidden';
    // if(position>1400)
    //     left_element.style.left = "60%";
    // if(position === 150)
    //     element.style.visibility = 'hidden';
        
    // document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';

// CHANGE COLOR LOGIC
    var r=Math.floor(Math.random()*200)+1,g=Math.floor(Math.random()*205)+16,b=Math.floor(Math.random()*200);
    if(position>0)
        {
            focus_element.style.color = `rgb(${r},${g},${b})`;
            for ( let i = 0; i<left_nav_element.length; i++)
                {
                    left_nav_element[i].style.borderColor = `rgb(${r},${g},${b}`;
                }
        }
  });