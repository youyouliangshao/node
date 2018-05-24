/**
 * jQuery plugin paroller.js v1.0
 * https://github.com/tgomilar/paroller.js
 * preview: https://tgomilar.github.io/paroller/
 **/

(function ($) {
    'use strict';

    var elem = $('[data-paroller-factor]');
    var setDirection = {
        vertical: function (elem, elemOffset) {
            if(elemOffset<0){
                elemOffset = 0
            }
            return elem.css({
                '-webkit-transform': 'translateY(' + elemOffset + 'px)',
                '-moz-transform': 'translateY(' + elemOffset + 'px)',
                'transform': 'translateY(' + elemOffset + 'px)'
            });
        },
        opacity: function (elem, elemOffset) {
            var opa = 0
            opa = elemOffset<(-320)?1:0
            return elem.animate({
                'opacity': opa
            },1000);
        },
        horizontal: function (elem, elemOffset) {
           // if(elemOffset<-121){
           //     elemOffset = -121
           // }
            return elem.css({
                '-webkit-transform': 'translateX(' + elemOffset + 'px)',
                '-moz-transform': 'translateX(' + elemOffset + 'px)',
                'transform': 'translateX(' + elemOffset + 'px)'
            });
        },
        horizontal1: function (elem, elemOffset) {
            var opacity1=0;
            if(elemOffset<(0)){
                opacity1 = (60 + elemOffset)/100
            }
            if(elemOffset<(-60)){
                elemOffset = -60
            }
            return elem.css({
                '-webkit-transform': 'translateX(' + elemOffset + 'px)',
                '-moz-transform': 'translateX(' + elemOffset + 'px)',
                'transform': 'translateX(' + elemOffset + 'px)',
                'opacity':(1-opacity1)
            });
        },
        horizontal2: function (elem, elemOffset) {
            var opacity2=0;
            if(elemOffset<(-60)){
                opacity2 = (120 + elemOffset)/100
            }
            if(elemOffset<(-120)){
                elemOffset = -120
            }
            return elem.css({
                '-webkit-transform': 'translateX(' + elemOffset + 'px)',
                '-moz-transform': 'translateX(' + elemOffset + 'px)',
                'transform': 'translateX(' + elemOffset + 'px)',
                'opacity':(1-opacity2)
            });
        },
        horizontal3: function (elem, elemOffset) {
            var opacity3=0;
            if(elemOffset<(-90)){
                opacity3 = (140 + elemOffset)/100
            }else{
                opacity3=0
            }
            if(elemOffset<(-140)){
                elemOffset = -140
            }
            return elem.css({
                '-webkit-transform': 'translateX(' + elemOffset + 'px)',
                '-moz-transform': 'translateX(' + elemOffset + 'px)',
                'transform': 'translateX(' + elemOffset + 'px)',
                'opacity':(1-opacity3)
            });
        }
    };

    $.fn.paroller = function(options) {
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();
        var options = $.extend({
            factor: 0, // - to +
            type: '', // foreground
            direction: 'vertical' // horizontal
        }, options);
        elem.each(function(index){
            var $this = $(this);
            var offset = $this.offset().top;
            var height = $this.outerHeight();
            var dataFactor = $this.data('paroller-factor');
            var dataType = $this.data('paroller-type');
            var dataDirection = $this.data('paroller-direction');
            var factor = (dataFactor) ? dataFactor : options.factor;
            var type = (dataType) ? dataType : options.type;
            var direction = (dataDirection) ? dataDirection : options.direction;
            var bgOffset = Math.round(offset * factor);
            var transform = Math.round((offset - (windowHeight / 2) + height) * factor);
            if(type == 'foreground') {
                if(direction == 'vertical') {
                    setDirection.vertical($this, transform);
                }
                else if(direction == 'horizontal') {
                    setDirection.horizontal($this, transform);
                }
                else if(direction == 'horizontal1') {
                    setDirection.horizontal1($this, transform);
                }
                else if(direction == 'horizontal2') {
                    setDirection.horizontal2($this, transform);
                }
                else if(direction == 'horizontal3') {
                    setDirection.horizontal3($this, transform);
                }
            }
            else if(type == 'changeOpacity') {
                setDirection.opacity($this, transform);
            }

            $(window).on('scroll', function(){
                var scrolling = $(this).scrollTop();
                bgOffset = Math.round((offset - scrolling) * factor);
                transform = Math.round(((offset - (windowHeight / 2) + height) - scrolling) * factor);
                if((type == 'foreground')) {
                    if(direction == 'vertical') {
                        setDirection.vertical($this, transform);
                    }
                    else if(direction == 'horizontal') {
                        setDirection.horizontal($this, transform);
                    }
                    else if(direction == 'horizontal1') {
                        setDirection.horizontal1($this, transform);
                    }
                    else if(direction == 'horizontal2') {
                        setDirection.horizontal2($this, transform);
                    }
                    else if(direction == 'horizontal3') {
                        setDirection.horizontal3($this, transform);
                    }
                }
            });
        });
    };
})(jQuery);
