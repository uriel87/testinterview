//
//
// //
// // app.directive('elementSize', function ($timeout) {
// //
// //     return {
// //         require: "selectComponent",
// //         link: function (scope, element, attrs, welcomeCtrl) {
// //             var width = attrs.class.substring(1 + attrs.class.lastIndexOf('-'));
// //             console.log('Directive width: ' + width);
// //
// //             var x = element.css[width];
// //             element.css({
// //                 'width': width + 'em',
// //                 'height': width + 'em',
// //                 'border-radius': '1rem',
// //             });
// //         }
// //     };
// // })
// app.directive('ngSize',['$parse', function ($parse) {
//
//     return {
//         restrict: 'A',
//         link: function(scope, elem, attrs) {
//             //read the passed value
//             attrs.$observe('ngSize', function setSize(value){
//                 attrs.$set('size', attrs.ngSize);
//             });
//             console.log("attr.optionSize" + JSON.stringify(attrs));
//         }
//     }
//
// // app.directive('optionSize', function ($parse) {
// //     return {
// //         require: 'select',
// //         link: function(scope, elem, attrs, ngSelect) {
// //             // get the source for the items array that populates the select.
// //             var optionsSourceStr = attrs.ngOptions.split(' ').pop()
// //             // use $parse to get a function from the options-class attribute
// //             // that you can use to evaluate later.
// //             var  getOptionsClass = $parse(attrs.optionsClass);
// //             angular.element(getOptionsClass).css('width', '50px');
// //
// //             scope.$watch(optionsSourceStr, function(items) {
// //                 // when the options source changes loop through its items.
// //                 angular.forEach(items, function(item, index) {
// //                     // evaluate against the item to get a mapping object for
// //                     // for your classes.
// //                     var classes = getOptionsClass(item)
// //                     // also get the option you're going to need. This can be found
// //                     // by looking for the option with the appropriate index in the
// //                     // value attribute.
// //                     var option = elem.find('option[value=' + index + ']');
// //                     angular.element(option).css('width', '50px');
// //
// //                     // now loop through the key/value pairs in the mapping object
// //                     // and apply the classes that evaluated to be truthy.
// //                     angular.forEach(classes, function(add, className) {
// //                         // if(add) {
// //                             angular.element(option).css('max-width', '50px');
// //                         // }
// //                     });
// //                 });
// //             });
// //         }
// //     };
// }]);
