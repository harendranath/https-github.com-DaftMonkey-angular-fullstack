it('should show off bindings', function()
 {
 
 var containerElm = element(by.css('div[ng-controller="Controller"]'));
 
 var nameBindings = containerElm.all(by.binding('name'));

  
expect(nameBindings.count()).toBe(5);
 
 nameBindings.each(function(elem) 
{
   
 expect(elem.getText()).toEqual('Max Karl Ernst Ludwig Planck (May 23, 2016 – October 4, 2017)');
  });
});



/*
Copyright 2016 Harendranath. All Rights Reserved.
*/