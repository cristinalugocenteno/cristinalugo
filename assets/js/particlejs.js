particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  var update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);


  $(function(){
    var header = $('#particles-js'),
    canvas = $('<canvas></canvas>').appendTo(header)[0],    
    ctx    = canvas.getContext('2d'),
    color  = '#FFFFE0',
    idle   = null, mousePosition;
    canvas.width         = window.innerWidth;
    canvas.height        = header.outerHeight();
    canvas.style.display = 'block';
    ctx.fillStyle = color;
    ctx.lineWidth = .5;
    ctx.strokeStyle = color;
    
    var mousePosition = { x: 30 * canvas.width / 100, y: 30 * canvas.height / 100 },
        dots = { nb: 150, distance: 80, d_radius: 150, array: [] };
        
    function Dot(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();
        this.radius = Math.random();
    }
    
    Dot.prototype = {
        create: function(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        },
        animate: function(){          
            for(var i = 0, dot=false; i < dots.nb; i++){
                dot = dots.array[i];
                if(dot.y < 0 || dot.y > canvas.height){
                    dot.vx = dot.vx;
                    dot.vy = - dot.vy;
                }else if(dot.x < 0 || dot.x > canvas.width){
                    dot.vx = - dot.vx;
                    dot.vy = dot.vy;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        },
        line: function(){
            for(var i = 0; i < dots.nb; i++){
                for(var j = 0; j < dots.nb; j++){
                    i_dot = dots.array[i];
                    j_dot = dots.array[j];
                    if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
                        if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                            ctx.beginPath();
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        }
    };

    function createDots(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(var i = 0; i < dots.nb; i++){
            dots.array.push(new Dot());
            dot = dots.array[i];
            dot.create();
        }
        dot.line();
        dot.animate();
    }

    idle = setInterval(createDots, 2000/30);   

    $(canvas).on('mousemove mouseleave', function(e){
        if(e.type == 'mousemove'){
            mousePosition.x = e.pageX;
            mousePosition.y = e.pageY;
        }
        if(e.type == 'mouseleave'){
            mousePosition.x = canvas.width / 2;
            mousePosition.y = canvas.height / 2;
        }
    });
});