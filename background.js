(function(global, $){

    $.fn.fill = function(howMany){
        this.starNum = howMany;
        var randomWidth, randomPlaceFromTop, randomPlaceFromLeft, addStar;
        var imgHTMLStart = '<figure style="';
        var imgHTMLEnd = '"><img src="http://merexcursion.com/stars-and-clouds-bg/images/star-trans.png" alt="star"></figure>';
        while(this.starNum>0){
            randomWidth = 'width:'+ ((Math.floor(Math.random() * (1 + 15))) + 2) + 'px;';
            randomPlaceFromTop = 'top:'+ (Math.round(Math.random() * 100)) + '%;';
            randomPlaceFromLeft = 'left:'+ (Math.round(Math.random() * 100)) + '%;';
            addStar = imgHTMLStart + randomWidth + randomPlaceFromTop + randomPlaceFromLeft + imgHTMLEnd;
            $(this).append(addStar);
            this.starNum--;
        }

        return this;
    }
    
    $.fn.parallax = function(speed){ // speed is a percent of total distance -- .30 etc

        this.speed = speed;
        this.curScrollPos;
        this.distance;
        this.docHeight = $('body').height();

        $(global).scroll(function(){

                this.curScrollPos = $(window).scrollTop();

                this.distance = this.curScrollPos*this.speed;

                $(this).css('top', '-' + this.distance + 'px');
                this.startScrollPos = this.curScrollPos;

        }.bind(this));
       
        return this;

    }

    $.fn.shootingStar = function(frequency){ // frequency = time in milliseconds
        var self = this;
        this.frequency = frequency;
        
        this.shootStar = function(){ // new star each time

                this.shootingStarId = 'star' + ((Math.round(Math.random() * 100))*(Math.round(Math.random() * 100)));
                this.randomSsWidth = ((Math.floor(Math.random() * (15 + 25))) + 2) + 'px';
                this.randomTop = (Math.round(Math.random() * 100)) + '%';
                this.shootingStarHTML = '<figure style="width:' + this.randomSsWidth + ';top:' + this.randomTop + '" id="' + this.shootingStarId + '" class="shooting-star"><img src="http://merexcursion.com/stars-and-clouds-bg/images/star-trans.png" alt="star"></figure>';

                $(this).append(this.shootingStarHTML);

                self.starRemove = setTimeout(function(){
                    $('#'+ self.shootingStarId).remove();
                }, this.frequency + 2000);
                
        };
        
        self.starInterval = setInterval(function(){
               self.shootStar();
        }, this.frequency);
       
        return this;

    }

}(window,jQuery));

$(document).ready(function(){

    $('#stars1').fill(100).parallax(.7);
    $('#stars2').fill(200).parallax(.4);
    $('#stars3').fill(150).parallax(.1).shootingStar(8000);
    
});