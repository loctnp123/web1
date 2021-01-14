function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
return vars;
}
var app = angular.module("kfcApp", [])
app.controller("pickupController", ($scope, $http) => {
    $http({
        method: "GET",
        url: "json/pickup.json"
    }).then(function success(res) {
        $scope.items = res.data;
        
    }, function fail(res) {
        $scope.error = res.statusText;
    });
    $scope.selectedMenu = "newproducts";
    var temp = getUrlVars()["id"];
        if(temp!=null&&temp!="")
            $scope.selectedMenu = temp;
    $scope.selectedItem = (menu) => {
        $scope.selectedMenu = menu;
    }
})
var radios = document.querySelectorAll('input[name="r"]');
var counter = 0;
changeSlide()
function changeSlide(){
    radios[counter].checked=true;
    counter++;
    if(counter>4) counter=0;
    setTimeout(changeSlide,3000);
}
var footer = [{
        content: "Our Food",
        link:"ourfood",
        details: [{
                content: "Our Secret Recipe",
                link: ""
            },
            {
                content: "Nutrition and Allergen",
                link: ""
            }
        ]
    },
    {
        content: "KFC Australia",
        link:"australia",
        details: [{
                content: "About Us",
                link: ""
            },
            {
                content: "About KFC Global",
                link: ""
            },
            {
                content: "Our History",
                link: ""
            },
            {
                content: "KFC App",
                link: ""
            },
            {
                content: "KFC Delivery",
                link: ""
            },
            {
                content: "Social Impact",
                link: ""
            },
            {
                content: "KFC Youth Foundation",
                link: ""
            },
            {
                content: "Fact Or Fiction",
                link: ""
            },
            {
                content: "FAQs",
                link: ""
            },
            {
                content: "Find a Store",
                link: ""
            }
        ]
    },
    {
        content: "KFC Jobs",
        link:"jobs",
        details: [{
                content: "Restaurant Jobs",
                link: ""
            },
            {
                content: "Corporate Jobs",
                link: ""
            }
        ]
    },
    {
        content: "Stay in Touch",
        link:"intouch",
        details: [{
            content: "Contact Us",
            link: "kfc_contact.html"
        }]
    }
]
app.controller("footerController", ($scope) => {
    $scope.footer = footer;
})