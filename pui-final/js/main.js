var textChange = function(el, target, interval) {
  //starting parameters

    this.target = target;
    this.el = el;
    this.loopCount = 0;
    this.interval = parseInt(interval, 10) || 2000;
    this.placeholder = '';
    this.tick();
    this.isBackspace = false;
  };

    //tick timing

  textChange.prototype.tick = function() {
    var i = this.loopCount % this.target.length;
    var fullTxt = this.target[i];
  
        //string splicing the word

    if (this.isBackspace == true) {
      this.placeholder = fullTxt.substring(0, this.placeholder.length - 1);
    } else {
      this.placeholder = fullTxt.substring(0, this.placeholder.length + 1);
    }
          //adding in the spliced section

    this.el.innerHTML = '<span class="wrap">'+ this.placeholder+'</span>';
  
    var dummy = this;
          //this decides how fast the typing will be occurring. it is random

    var timingNum = 200 - Math.random() * 100;
  
    if (this.isBackspace == true) { 
      timingNum /= 2; 
    }
  
    if ((!this.isBackspace == true) && (this.placeholder === fullTxt)) {
      timingNum = this.interval;
      this.isBackspace = true;
    } else if ((this.isBackspace) && (this.placeholder === '')) {
      this.isBackspace = false;
      this.loopCount++;
      timingNum = 500;
    }
  
    setTimeout(function() {
      dummy.tick();
    }, timingNum);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i < elements.length; i++) {
      var target = elements[i].getAttribute('data-rotate');
      var interval = elements[i].getAttribute('data-period');
      if (target) {
        new textChange(elements[i], JSON.parse(target), interval);
      }
    }
    // add the css
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };