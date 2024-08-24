var npImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
npImage.setAttribute("xmlns", "http://www.w3.org/2000/svg");
npImage.setAttribute("width", "80");
npImage.setAttribute("zoomAndPan", "magnify");
npImage.setAttribute("viewBox", "0 0 60 60");
npImage.setAttribute("height", "80");
npImage.setAttribute("preserveAspectRatio", "xMidYMid meet");
npImage.setAttribute("style", "position: fixed;top: 8px;left: 8px;width: 35px;height: 35px;z-index: 99999;opacity: 0.80;border-radius: 50%;box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.65), 0 0 13px 5px rgba(0, 0, 0, 0.28);");
npImage.innerHTML = '<style>.bnatscay{clip-rule:evenodd}</style><defs><linearGradient id="NathanPrinsley" gradientTransform="rotate(90)"><stop offset="0" stop-color="rgb(59.6078431372549%, 0%, 100%)"></stop><stop offset=".2" stop-color="rgb(89.01960784313725%, 0%, 100%)"></stop><stop offset=".4" stop-color="rgb(89.80392156862746%, 55.294117647058826%, 5.490196078431373%)"></stop><stop offset=".6" stop-color="rgb(45.490196078431374%, 75.68627450980392%, 30.19607843137255%)"></stop><stop offset="1" stop-color="rgb(7.8431372549019605%, 61.1764705882353%, 87.45098039215686%)"></stop></linearGradient><clipPath id=bnatscay><path d="M.121.129h59.746v59.742H.121zm0 0" class=bnatscay></path></clipPath><clipPath id="cnatscay"><path d="M29.996.129C13.496.129.121 13.504.121 30s13.375 29.871 29.875 29.871S59.867 46.496 59.867 30 46.492.129 29.996.129" class=bnatscay></path></clipPath><clipPath id="D"><path d="M2.32 2.277h55.441v55.445H2.32zm0 0" class=bnatscay></path></clipPath><clipPath id="E"><path d="M30.039 2.277C14.73 2.277 2.32 14.691 2.32 30s12.41 27.723 27.719 27.723S57.762 45.309 57.762 30 45.352 2.277 30.039 2.277" class=bnatscay></path></clipPath><clipPath id="F"><path d="M5.309 10.48h49.383V49.52H5.309zm0 0" class=bnatscay></path></clipPath><clipPath id="G"><path d="M30 10.48C16.363 10.48 5.309 19.219 5.309 30S16.363 49.52 30 49.52 54.691 40.781 54.691 30 43.637 10.48 30 10.48" class=bnatscay></path></clipPath><clipPath id="H"><path d="M35.309 23.383h2.629v21.5h-2.629zm0 0" class=bnatscay></path></clipPath><clipPath id="I"><path d="M35.309 19.117h4.898v3.219h-4.898zm0 0" class=bnatscay></path></clipPath><clipPath id="J"><path d="M14.543 19.117h5.266v28.895h-5.266zm0 0" class=bnatscay></path></clipPath><clipPath id="K"><path d="M30.039 19.117h2.664v25.539h-2.664zm0 0" class=bnatscay></path></clipPath><clipPath id="L"><path d="M32.688 19.117h2.664v25.539h-2.664zm0 0" class=bnatscay></path></clipPath></defs><g clip-path="url(#bnatscay)"><g clip-path="url(#cnatscay)"><path fill="url(#NathanPrinsley)" d="M.121.129h59.746v59.742H.121zm0 0"></path></g></g><g clip-path="url(#D)"><g clip-path="url(#E)"><path d="M2.32 2.277h55.441v55.445H2.32zm0 0"></path></g></g><g clip-path="url(#F)"><g clip-path="url(#G)"><path fill="#fff" d="M5.309 10.48h49.383V49.52H5.309zm0 0"></path></g></g><path d="M35.291 35.65v9h-5.25V19.119h9.953c1.914 0 3.602.355 5.063 1.063 1.457.699 2.578 1.695 3.359 2.984s1.172 2.762 1.172 4.406c0 2.5-.859 4.477-2.578 5.922-1.711 1.438-4.074 2.156-7.094 2.156zm0-4.25h4.703c1.395 0 2.457-.328 3.188-.984s1.094-1.594 1.094-2.812c0-1.25-.371-2.258-1.109-3.031-.73-.77-1.746-1.164-3.047-1.187h-4.828zm0 0" fill="red"></path><path d="M35.295 44.65h-5.25l-10.25-16.797V44.65h-5.25V19.119h5.25l10.266 16.828V19.119h5.234zm0 0"></path><g clip-path="url(#H)"><path fill="#fff" d="M35.309 23.383h2.535v21.531h-2.535zm0 0"></path></g><g clip-path="url(#I)"><path fill="red" d="M35.309 19.117h4.855v3.164h-4.855zm0 0"></path></g><g clip-path="url(#J)"><path d="M14.543 19.117h5.277v28.918h-5.277zm0 0"></path></g><g clip-path="url(#K)"><path fill="red" d="M30.039 19.117h2.746V44.66h-2.746zm0 0"></path></g><g clip-path="url(#L)"><path d="M32.688 19.117h2.746V44.66h-2.746zm0 0"></path></g>';
var nathanText = document.createElement("div");
nathanText.setAttribute("style", "user-select:none;position: fixed;bottom: 4px; left: 50%;transform: translateX(-50%);z-index:9999;background:rgba(0, 0, 0, 0.6);color:#ffffff;font-size:16px;padding:1px 5px;border-radius:6px;opacity:0.80;text-align:center;font-weight:bold;font-family:sans-serif;text-shadow:0px 0px 5px rgba(0, 0, 0, 1);");
nathanText.innerHTML = "games.prinsh.com";

document.body.appendChild(nathanText);
document.body.appendChild(npImage);

nathanText.style.opacity = "0";
npImage.style.opacity = "0";


var NPcurrentDomain = window.location.hostname;
var NPcurrentDomainPoin = document.domain;
var NPallowedDomain = "nathanprinsley-games.prinsh.com";
  if (NPcurrentDomain !== NPallowedDomain || NPcurrentDomainPoin !== NPallowedDomain) {
    nathanText.style.color = "#6ec0ff";
    nathanText.style.cursor = "pointer";
    npImage.style.cursor = "pointer";
        nathanText.addEventListener("click", function () {
            window.open("https://games.prinsh.com", "_blank");
        });
        npImage.addEventListener("click", function () {
            window.open("https://www.prinsh.com/", "_blank");
        });
  }


var fadeInAnimationNathan = function (timestampPrinsley) {
  var opacityNathan = parseFloat(nathanText.style.opacity);
  if (opacityNathan < 0.80) {
    opacityNathan += 0.01 * ((timestampPrinsley - fadeInAnimationNathan.startTime) / 900);
    if (opacityNathan > 0.80) opacityNathan = 0.80;
    nathanText.style.opacity = opacityNathan;
    npImage.style.opacity = opacityNathan;
    if (opacityNathan < 0.80) {
      requestAnimationFrame(fadeInAnimationNathan);
    }
  }
};

fadeInAnimationNathan.startTime = performance.now();
requestAnimationFrame(fadeInAnimationNathan);

setTimeout(function () {
  var starttimeztampNathan = performance.now();
  var fadeOutAnimationNathan = function (timestampPrinsley) {
    var opacityNathan = parseFloat(nathanText.style.opacity);
    if (opacityNathan > 0) {
      opacityNathan -= 0.01 * ((timestampPrinsley - fadeOutAnimationNathan.startTime) / 700);
      if (opacityNathan < 0) opacityNathan = 0;
      nathanText.style.opacity = opacityNathan;
      npImage.style.opacity = opacityNathan;
      if (opacityNathan > 0) {
        requestAnimationFrame(fadeOutAnimationNathan);
      } else {
        nathanText.remove();
        npImage.remove();
      }
    }
  };

  fadeOutAnimationNathan.startTime = starttimeztampNathan;
  requestAnimationFrame(fadeOutAnimationNathan);
}, 2800);
