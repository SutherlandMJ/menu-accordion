/*!
 * jQuery Accordion Menu
 * Copyright (c) 2010-2015
 * Developed by: Michael Sutherland
 * Version: 2.0 (January 2013)
 * The University of Illinois/NCSA Open Source License (NCSA)
 * http://opensource.org/licenses/NCSA
 * Requires: jQuery v1.7.2 or later
 */

$(document).ready(function(){
        $(".container").hide();

        $("ul#menu li.link-header").click(function(){
         $(this).toggleClass("active").next().slideToggle("fast");
        });
     });
