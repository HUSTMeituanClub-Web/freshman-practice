/**
 * 
 * @param {Element | String} element
 * @param {String} [selector]
 * @returns {Array<Element>}
 */
function $(element, selector)
{
    if (!element)
        return;
    if (!selector)
    {
        selector = element;
        element = document;
    }
    var result = [];
    if (selector instanceof Element)
        result = [selector];
    else
        result = element.querySelectorAll(selector);
    result.css = function (a, b)
    {
        if (!a)
            return;
        if (result.length <= 0)
            return;
        if (b===undefined) {
            var element = result[0];
            return window.getComputedStyle(element, null)[a];
        }
        else {
            for (var i = 0; i < result.length; i++) {
                result[i].style[a] = b;
            }
        }
    }
    result.removeClass = function (className)
    {
        for (var i = 0; i < result.length; i++) {
            result[i].classList.remove(className);
        }
    }
    result.addClass = function (className)
    {
        for (var i = 0; i < result.length; i++) {
            result[i].classList.add(className);
        }
    }
    result.height = function (h)
    {
        if (result.length <= 0)
            return;
        if (h===undefined) {
            var element = result[0];
            var style = window.getComputedStyle(element);

            return element.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
        }
        else {
            for (var i = 0; i < result.length; i++) {
                result[i].style.height = h + "px";
            }
        }
    }
    result.width = function (w)
    {
        if (result.length <= 0)
            return;
        if (w === undefined) {
            var element = result[0];
            var style = window.getComputedStyle(element);
            return element.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
        }
        else {
            for (var i = 0; i < result.length; i++) {
                result[i].style.width = w + "px";
            }
        }
    }
    result.blur = function (listener)
    {
        if (!listener)
        {
            for (var i = 0; i < result.length; i++)
            {
                result[i].dispatchEvent(new Event("blur"));
            }
        }
        else
        {
            for (var i = 0; i < result.length; i++)
            {
                result[i].addEventListener("blur", listener);
            }
        }
    }
    result.change = function (listener)
    {
        if (!listener)
        {
            for (var i = 0; i < result.length; i++)
            {
                result[i].dispatchEvent(new Event("change"));
            }
        }
        else
        {
            for (var i = 0; i < result.length; i++)
            {
                result[i].addEventListener("change", listener);
            }
        }
    }
    result.mouseDown = function (listener)
    {
        if (!listener) {
            for (var i = 0; i < result.length; i++) {
                result[i].dispatchEvent(new Event("mousedown"));
            }
        }
        else {
            for (var i = 0; i < result.length; i++) {
                result[i].addEventListener("mousedown", listener);
            }
        }
    }
    result.mouseUp = function (listener)
    {
        if (!listener) {
            for (var i = 0; i < result.length; i++) {
                result[i].dispatchEvent(new Event("mouseup"));
            }
        }
        else {
            for (var i = 0; i < result.length; i++) {
                result[i].addEventListener("mouseup", listener);
            }
        }
    }
    result.touchStart = function (listener)
    {
        if (!listener) {
            for (var i = 0; i < result.length; i++) {
                result[i].dispatchEvent(new Event("touchstart"));
            }
        }
        else {
            for (var i = 0; i < result.length; i++) {
                result[i].addEventListener("touchstart", listener);
            }
        }
    }
    result.touchEnd = function (listener)
    {
        if (!listener) {
            for (var i = 0; i < result.length; i++) {
                result[i].dispatchEvent(new Event("touchend"));
            }
        }
        else {
            for (var i = 0; i < result.length; i++) {
                result[i].addEventListener("touchend", listener);
            }
        }
    }
    result.click = function (listener)
    {
        if (!listener) {
            for (var i = 0; i < result.length; i++) {
                result[i].dispatchEvent(new Event("click"));
            }
        }
        else {
            for (var i = 0; i < result.length; i++) {
                result[i].addEventListener("click", listener);
            }
        }
    }
    result.mouseEnter = function (listener)
    {
        if (!listener) {
            for (var i = 0; i < result.length; i++) {
                result[i].dispatchEvent(new Event("mouseenter"));
            }
        }
        else {
            for (var i = 0; i < result.length; i++) {
                result[i].addEventListener("mouseenter", listener);
            }
        }
    }
    result.mouseOut = function (listener)
    {
        if (!listener) {
            for (var i = 0; i < result.length; i++) {
                result[i].dispatchEvent(new Event("mouseout"));
            }
        }
        else {
            for (var i = 0; i < result.length; i++) {
                result[i].addEventListener("mouseout", listener);
            }
        }
    }
    result.animate = function (options, time, callback)
    {

        for (var key in options) {

        }
    }
    result.text = function(text)
    {
        if (result.length <= 0)
            return "";    
        if (text===undefined)
        {
            return result[0].innerText;
        }
        else
        {
            for (var i = 0; i < result.length; i++)
            {
                result[i].innerText = text;
            }
        }
    }
    return result;
}
//export { $ };