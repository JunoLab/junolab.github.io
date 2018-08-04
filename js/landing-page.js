// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// interactive-image setup
var items = {
    main: [
        {
            title: "Workspace View",
            description: "The Workspace panel summarizes all variables defined in "+
                         "the currently active module.",
            position: {
                left: 84,
                top: 20
            }
        },
        {
            title: "Dynamic Autocompletion",
            description: "Suggestions are created dynamically based on the currently loaded "+
                         "packages.",
            position: {
                left: 35,
                top: 50
            }
        },
        {
            title: "Inline Results",
            description: "Interactive inline results allow for notebook-like evaluation.",
            position: {
                left: 35,
                top: 30
            }
        },
        {
            title: "Integrated REPL",
            description: "Seamless integration of the Julia REPL.",
            position: {
                left: 40,
                top: 85
            }
        },
        {
            title: "Plot Pane",
            description: "In-editor display of plots, complete with history and "+
                         "interactivity.",
            position: {
                left: 78,
                top: 52
            }
        },
        {
            title: "Progress Indicator",
            description: "Fully customizable progress bar.",
            position: {
                left: 10,
                top: 92
            }
        },
    ],
    debugger: [
        {
            title: "Steppin' through code",
            description: "Easily step into/out of functions or to the next line/call.",
            position: {
                left: 39,
                top: 7
            }
        },
        {
            title: "Workspace View",
            description: "The Workspace is automatically updated to show the values "+
                         "of variables in the current (function specific) local scope.",
            position: {
                left: 78,
                top: 18
            }
        },
        {
            title: "Inline Stepper",
            description: "Shows the call that will be evaluated next.",
            position: {
                left: 43,
                top: 54
            }
        },
        {
            title: "REPL Integration",
            description: "Evaluate arbitrary code in the local scope.",
            position: {
                left: 40,
                top: 85
            }
        },
    ],
    docs: [
        {
            title: "Documentation Pane",
            description: "Easily search through package and Base documentation, "+
                         "with full Markdown and LaTeX rendering.",
            position: {
                left: 78,
                top: 18
            }
        },
        {
            title: "In-Editor Access to Documentation",
            description: "Show the docstring to the symbol under the cursor at a keystroke.",
            position: {
                left: 35,
                top: 37.5
            }
        },
    ],
    profiler: [
        {
            title: "Inline display of relative runtime",
            description: "Allows quickly finding lines that take a substantial "+
                         "portion of your code's runtime.",
            position: {
                left: 40,
                top: 14
            }
        },
        {
            title: "Interactive Profiler Flamechart",
            description: "Visualize relative runtime of called functions.",
            position: {
                left: 78,
                top: 52
            }
        },
    ],
    terminal: [
        {
            title: "Terminal Integration",
            description: "Open a new terminal in a directory of your choice.",
            position: {
                left: 50,
                top: 85
            }
        },
    ],
};

// Plugin configuration example (all parameters are optional)
var options = {
      fontColor: "#333333",
      backgroundColor: "#FFFFFF",
      debug: false
  };

// Activate the plugin
$(document).ready(function () {
    $('.interactive-image').interactiveImage(items['main'], options)
});

function changeImage(uri, id) {
    $('#image-overlay-container').remove()
    let img = document.createElement('div')
    img.id = 'image-overlay-container'
    img.classList.add('interactive-image')
    document.getElementById('screeny').parentElement.appendChild(img)

    let screeny = document.getElementById('screeny')
    screeny.src = uri;

    $('#image-overlay-container').interactiveImage(items[id], options)
}
