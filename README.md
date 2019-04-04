# Farfetch
Farfetch Recruiting Exercises


#Feature 1 - The Header

Was created a new component in the components folder that would return
the literal html of the Header section
In the folder the index.js defines the literal string to output the html code and
the index.scss that specifies the styles required.
The Header section has also the bag total price, this value is updated 
in via the bag/index.js file what will do the calculations of the value.


#Feature 2 - Item Removal
To do this feature the product-card element was updated, was added am id to
the card and the click event in the cross icon.
Also the event action to remove the item from the bag was declared globally
so it can be used anywhere in the code.
This method (in the bag/index.js file) will call the BagSevice method to remove
the items, if the api returns true the element product-card is removed from the DOM
and also from the bag global variable. The the total price is recalculated and 
applied into the totalPrice element in the Header section


#Final notes
The exercise implementation is probably not the best approach since most of the time
my experience is with frameworks like Angular. 
My biggest challenge was to work around with the binding of the bag data and refresh 
the products-card ui list.
That's why my option was to handle directly the DOM and not update the variable dynamically.  
