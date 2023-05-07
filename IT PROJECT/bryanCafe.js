/*****************************************************************************
 * Function: addBeverage(name, price)                                        *
 * Function Description:                                                     *
 *  This function creates a table row with name and price of a beverage.     *
 *****************************************************************************/
function addBeverage(parName, parPrice)
{
  let thisRow = document.createElement("tr")
  let thisName = createElementWithTextNode("td", parName);
  thisRow.appendChild(thisName);

  let thisPrice = createElementWithTextNode("td", parPrice);
  thisRow.appendChild(thisPrice);
  return thisRow;
}//function ajaxGetXMLDocument(xmlFile)

/*****************************************************************************
 * Function: ajaxGetXMLDocument(xmlFile)                                     *
 * Function Description:                                                     *
 *  This function returns the contents of xml file in a variable             *
 *****************************************************************************/
function ajaxGetXMLDocument(xmlFile)
{
    if(window.XMLHttpRequest)
    {
       xmlhttp = new XMLHttpRequest();
    }
    else
    {
       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", xmlFile, false);
    xmlhttp.send();
    return xmlhttp.responseXML;
}//function ajaxGetXMLDocument(xmlFile)

/*****************************************************************************
 * Function: addBranch(parAddress                                            *
 *                     ,parGoogleMapsLink                                    *
 *                     ,parContact                                           *
 *                     ,parWeekdayHours                                      *
 *                     ,parWeekendHours)                                     *
 * Function Description:                                                     *
 *  This function creates a row with columns address details and maps.       *
 *****************************************************************************/

function addBranch(parAddress
                  ,parGoogleMapsLink
                  ,parContact
                  ,parWeekdayHours
                  ,parWeekendHours)
{
  let attributeList = {class:"row mb-5"};
  const thisRow = createElementWithAttributes("div", attributeList);

  //Process contact details
  attributeList = {class:"col-md-3"};
  const addressDetailsColumn = createElementWithAttributes("div", attributeList);
  addressDetailsColumn.appendChild(createElementWithTextNode("h5", "Address"));
  addressDetailsColumn.appendChild(createElementWithTextNode("p", parAddress));

  addressDetailsColumn.appendChild(createElementWithTextNode("h5", "Contact"));
  addressDetailsColumn.appendChild(createElementWithTextNode("p", parContact));

  addressDetailsColumn.appendChild(createElementWithTextNode("h5", "Opening Hours"));
  const openingHoursList = document.createElement("ul");
  openingHoursList.appendChild(createElementWithTextNode("li", parWeekdayHours));
  openingHoursList.appendChild(createElementWithTextNode("li", parWeekendHours));
  addressDetailsColumn.appendChild(openingHoursList);

  thisRow.appendChild(addressDetailsColumn);

  attributeList = {class:"col-md-9"};
  const addressMapColumn = createElementWithAttributes("div", attributeList);

  attributeList = {class:"w-100 h-100", src:parGoogleMapsLink};
  const thisMapLink = createElementWithAttributes("iframe", attributeList);
  addressMapColumn.appendChild(thisMapLink);
  thisRow.appendChild(addressMapColumn);

  return thisRow;
}//function addBranch()

/*****************************************************************************
 * Function: createCard(name, price, description, image)                     *
 * Function Description:                                                     *
 * This function creates a card with parameters item name, price,            *
 *   description and image file name                                         *
 *****************************************************************************/
function createCard(parName, parPrice, parDescription, parImage){
  //Create Column
  let attributeList = {class: "col"};
  const thisColumn = createElementWithAttributes("div", attributeList);

  //Create Card
  attributeList = {class: "card shadow"};
  const thisCard = createElementWithAttributes("div", attributeList);

  //Create Card Image top
  attributeList = {class:"card-img-top"
                  ,src:"images/menu/"+parImage
                  ,alt:"Card image cap"
                   };
  const thisImageTop = createElementWithAttributes("img", attributeList);

  //Create Card Body
  attributeList = {class:"card-body"};
  const thisCardBody = createElementWithAttributes("div", attributeList);

  //Create Card Body.Card Title
  attributeList = {class:"card-title"};
  const thisCardTitle = createElementWithAttributes("h5", attributeList);
  thisCardTitle.appendChild(document.createTextNode(parName));
  thisCardBody.appendChild(thisCardTitle);

  //Create Card Body.Card Text
  attributeList = {class:"card-text"};
  let thisCardText = createElementWithAttributes("p", attributeList);
  thisCardText.appendChild(document.createTextNode(parDescription));
  thisCardBody.appendChild(thisCardText);

  //Create Card Body.Card Price
  attributeList = {class:"price"};
  thisCardText = createElementWithAttributes("h6", attributeList);
  thisCardText.appendChild(document.createTextNode(parPrice));
  thisCardBody.appendChild(thisCardText);

  //Create the card
  thisCard.appendChild(thisImageTop);
  thisCard.appendChild(thisCardBody);
  thisColumn.appendChild(thisCard);
  return thisColumn;
}//function createCard(parProductDetails

/*****************************************************************************
 * Function: createElementWithAttributes(parElement, parAttributeList)       *
 * Function Description:                                                     *
 * This function creates an element with any number of attributes            *
 *---------------------------------------------------------------------------*
 * Parameter Description:                                                    *
 * 1. parElement. Element in string format. e.g. "div"                       *
 * 2. parAttributeList. Attribute(s) in json format without stringifying     *
 *    example: {"src": "myImage.jpg", class:"w-100", alt:"Image not loaded"} *
 *****************************************************************************/
function createElementWithAttributes(parElement, parAttributeList)
{
  const thisElement = document.createElement(parElement);

  for(attribute in parAttributeList){
    thisAttribute = document.createAttribute(attribute);
    thisAttribute.value = parAttributeList[attribute];
    thisElement.setAttributeNode(thisAttribute);
  }//for(attribute in parAttributeList)
  return thisElement;
}//function createElementWithAttributes(parElement, parAttributeList)

/*****************************************************************************
 * Function: createElementWithTextNode(parElement, parTextNode)              *
 * Function Description:                                                     *
 * This function creates an element with text node. example: <h1>Hello</h1>  *
 *---------------------------------------------------------------------------*
 * Parameter Description:                                                    *
 * 1. parElement. Element in string format. e.g. "div"                       *
 * 2. parTextNode. Text node in string format. e.g. "Hello"                  *
 *****************************************************************************/
function createElementWithTextNode(parElement, parTextNode) {
    const thisNewElement = document.createElement(parElement);
    const thisTitleTextNode = document.createTextNode(parTextNode);
    thisNewElement.appendChild(thisTitleTextNode);
    return thisNewElement;
}//function createElementWithTextNode(parElement, parTextNode)

/*****************************************************************************
 * Function: getCurrentYear()                                                *
 * Function Description:                                                     *
 *  This function gets the current year.                                     *
 *****************************************************************************/
function getCurrentYear()
{
  return new Date().getFullYear();
}
