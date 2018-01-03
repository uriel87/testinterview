


app.directive('elementSize', function ($timeout) {

    return {
        require: "selectComponent",
        link: function (scope, element, attrs, welcomeCtrl) {
            var width = attrs.class.substring(1 + attrs.class.lastIndexOf('-'));
            console.log('Directive width: ' + width);

            var x = element.css[width];
            element.css({
                'width': width + 'em',
                'height': width + 'em',
                'border-radius': '1rem',
            });
        }
    };
})
