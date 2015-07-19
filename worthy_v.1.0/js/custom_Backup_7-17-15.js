/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */

/**GET*BROTHER*PICS******************************************************************************************************************************************************/

function getBrotherPics(passArray)
{
	//var brotherArray =  JSON.parse($("#dataHolder_hack").text());
	var brotherArray =  JSON.parse(passArray);

	
	var fileExt = ".jpg"
	var folderPath = "./images/brother_pictures/";


	brotherArray.forEach(function(element, index, array)
	{
	var fileName = element["FNAME"] + "_" + element["LNAME"] + fileExt;
	var filePath = folderPath + fileName;

	if(!hasPic(filePath))
	{
		filePath = folderPath + "man_placeholder.gif";
	}



    var result = '<div id="'+ element["LNAME"] + '_pic_cont" class="col-sm-6 col-md-2 isotope-item brotherPic  '+ element["YEAR"]+ '">';
	result +=				'<div class="image-box">';
	result +=						'<div class="overlay-container">';
	result +=							'<img src="' + filePath + '" alt="">';
	result +=							'<a class="overlay" data-toggle="modal" data-target="#' + element["LNAME"] + '_pic">';
	result +=								'<i class="fa fa-search-plus"></i>';
	result +=								'<span>'+ element["HOME"] +'</span>';
	result +=							'</a>';
	result +=						'</div>';
	result +=						'<a class="btn btn-default btn-block" data-toggle="modal" data-target="#' + element["LNAME"] + '_pic">' + element["FNAME"] + '&nbsp;' + element["LNAME"] +  '</a>';
	result +=					'</div>';

	result +=					'<div class="modal fade" id="' + element["LNAME"] + '_pic" tabindex="-1" role="dialog" aria-labelledby="' + element["LNAME"] + '_pic_label" aria-hidden="true">';
	result +=					'<div class="modal-dialog modal-lg">';
	result +=					'<div class="modal-content">';
	result +=								'<div class="modal-header">';
	result +=									'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>';
	result +=									'<h4 class="modal-title" id="' + element["LNAME"] + '_pic_label">' + element["FNAME"] + '&nbsp;' + element["LNAME"] +  '</h4>';
	result +=								'</div>';
	result +=								'<div class="modal-body">';
	result +=									'<h3>' + element["FNAME"] + '&nbsp;' + element["LNAME"] + '</h3>';
	result +=									'<div class="row">';
	result +=										'<div class="col-md-6">';
	result +=											'<ul>';
	if(element["POS"].toLowerCase().localeCompare("null") != 0)
	{
		result +=												'<li><strong>Position: </strong>' + element["POS"] + '</li>';
	}
	if(element["YEAR"].toLowerCase().localeCompare("null") != 0)
	{
		result +=												'<li><strong>Year: </strong>' + element["YEAR"] + '</li>';
	}
	if(element["MAJOR"].toLowerCase().localeCompare("null") != 0)
	{
		result +=												'<li><strong>Major: </strong>' + element["MAJOR"] + '</li>';
	}
	if(element["HOME"].toLowerCase().localeCompare("null") != 0)
	{
		result +=												'<li><strong>Home Town: </strong>' + element["HOME"] + '</li>';
	}
	result +=											'</ul>';
	result +=										'</div>';
	result +=										'<div class="col-md-6">';
	result +=											'<img src="' + filePath + '" alt="">';
	result +=										'</div>';
	result +=									'</div>';
	result +=								'</div>';
	result +=								'<div class="modal-footer">';
	result +=									'<button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button>';
	result +=								'</div>';
	result +=							'</div>';
	result +=						'</div>';
	result +=					'</div>';
	result +=				'</div>';

        $("#brotherPicContainer").append(result);

	

});
    paginatePics();
	return true;
}

/********************************************************************************************************************************************************/
/**LOAD*XML******************************************************************************************************************************************************/

function loadXMLDoc(url)
{
var xmlhttp;
var txt,x,xx,i;

var resArray = new Array();

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    x=xmlhttp.responseXML.documentElement.getElementsByTagName("DSPB");
    for (i=0;i<x.length;i++)
      {
      var brother = new Array();
      xx=x[i].getElementsByTagName("FNAME");
        {
        try
          {
          brother["FNAME"] = xx[0].firstChild.nodeValue;
          }
        catch (er)
          {
          brother["FNAME"] = "";
          }
        }
      xx=x[i].getElementsByTagName("LNAME");
        {
        try
          {
          brother["LNAME"] = xx[0].firstChild.nodeValue;
          }
        catch (er)
          {
          brother["LNAME"] = "";
          }
        }
      xx=x[i].getElementsByTagName("POS");
        {
        try
          {
          brother["POS"] = xx[0].firstChild.nodeValue;
          }
        catch (er)
          {
          brother["POS"] = "";
          }
        }
      xx=x[i].getElementsByTagName("YEAR");
        {
        try
          {
          brother["YEAR"] = xx[0].firstChild.nodeValue;
          }
        catch (er)
          {
          brother["YEAR"] = "";
          }
        }
      xx=x[i].getElementsByTagName("MAJOR");
        {
        try
          {
          brother["MAJOR"] = xx[0].firstChild.nodeValue;
          }
        catch (er)
          {
          brother["MAJOR"] = "";
          }
        }
      xx=x[i].getElementsByTagName("HOME");
        {
        try
          {
          brother["HOME"] = xx[0].firstChild.nodeValue;
          }
        catch (er)
          {
          brother["HOME"] = "";
          }
        }
        resArray.push({"FNAME": brother["FNAME"], "LNAME": brother["LNAME"], "POS": brother["POS"], "YEAR": brother["YEAR"], "MAJOR": brother["MAJOR"], "HOME": brother["HOME"]});
      }

    }

      getBrotherPics(JSON.stringify(resArray));

   // $("#dataHolder_hack").html(JSON.stringify(resArray)).triggerHandler('dataHolderChanged');
  }

xmlhttp.open("GET",url,true);
xmlhttp.send();


}

/********************************************************************************************************************************************************/
/**HAS*PIC*****************************************************************************************************************************************************/
//Checks if picture path exists

function hasPic(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    try
    {
    	http.send();
    	return http.status!=404;
    	
    }
    catch(e)
    {
    	return 0;
    }
    
}

/********************************************************************************************************************************************************/
/**MAKE*ELEMENT*VISIBLE******************************************************************************************************************************************************/

function mkVisible(id)
{
	$(id).show();	
}

/********************************************************************************************************************************************************/
/**FOCUS*VIEW*ON*ELEMENT*W/*OFFSET************************************************************************************************************************************************/

function focusView(element, offset)
{
    element = element.replace("link", "");
    $('html,body').unbind().animate({scrollTop: $(element).offset().top-offset},'slow');
}

/********************************************************************************************************************************************************/
/**CHECK*IF*ELEMENT*IS*IN*VIEWPORT*************************************************************************************************************************************************/

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

/********************************************************************************************************************************************************/

function addOuterGlow(element, glowSpecs)
{
  var styleProps = ["webkit-box-shadow", "moz-box-shadow", "box-shadow" ];
  $.each( styleProps, function( ind, val ) {
    element.css(val, glowSpecs);
  });
}

/****Check*PageRange*Function**************************************************************************************************************************************************/

function checkPageRange(numb, low, high)
{
    if(numb >= low && numb<=high)
    {
        return true;
    }
    else{
        return false;
    }
}

/********************************************************************************************************************************************************/

function paginatePics(activeClass)
{
    console.log('paginate called');
    var counter = 0;
    var pageClass;

    if(activeClass == undefined)
    {
        $('#brotherPicContainer').find('.brotherPic').each(function(){
            switch(true){
                case checkPageRange(counter, 0, 18):
                    pageClass = 'page1';
                    break;
                case checkPageRange(counter, 19, 36):
                    pageClass = 'page2';
                    break;
                case checkPageRange(counter, 37, 54):
                    pageClass = 'page3';
                    break;

            }
            $(this).removeClass('page1', 'page2', 'page3');
            $(this).addClass(pageClass);

            counter += 1;
        });
    }
    else{
        $('#brotherPicContainer').find('.brotherPic').each(function(){
            $(this).removeClass('page1', 'page2', 'page3');
        });
        $('#brotherPicContainer').find('.brotherPic' + activeClass).each(function(){
            switch(true){
                case checkPageRange(counter, 0, 18):
                    pageClass = 'page1';
                    break;
                case checkPageRange(counter, 19, 36):
                    pageClass = 'page2';
                    break;
                case checkPageRange(counter, 37, 54):
                    pageClass = 'page3';
                    break;

            }
            $(this).removeClass('page1', 'page2', 'page3');
            $(this).addClass(pageClass);

            counter += 1;
        });
    }

    var menu = '<ul class="pagination">';
    for(var i=1; i<=(counter/6); i++){
        menu += '<li><a href="#" class="paginatorBtn pageBtn'+i+'" onclick="setPage('+i+', '+activeClass+')">' + i + '</a></li>'
    }
    menu += '</ul>';

    $('#paginatorContainer').html(menu);

    setPage(1, activeClass);


}


function setPage(pageNumber, activeYear)
{
    $('#paginatorContainer').find('.paginatorBtn').each(function() {
        $(this).removeClass('active');
    });
    var activePageClass = ".page" + pageNumber;
    $('.pageBtn'+pageNumber).addClass('active')
    $('#brotherPicContainer').find('.brotherPic'+activeYear).each(function(){


        if($(this).hasClass(activePageClass)){
            console.log($(this));
            $(this).show();
        }
        else
        {
            $(this).hide();
        }

    });
}