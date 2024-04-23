//separated just to improve if it doesn't work
export function cloneObject(obj, target) {
    if (obj == null) {
        return null;
    }
    var r = JSON.parse(JSON.stringify(obj));
    if (!target) {
        return r;
    }

    for (var i in r) {
        target[i] = r[i];
    }
    return target;
}

/*
* https://gist.github.com/jed/982883?permalink_comment_id=852670#gistcomment-852670
*/
export function uuidv4 () {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16));
}

let iGetTime
//timer that works everywhere
if (typeof performance != "undefined") {
    iGetTime = performance.now.bind(performance);
} else if (typeof Date != "undefined" && Date.now) {
    iGetTime = Date.now.bind(Date);
} else if (typeof process != "undefined") {
    iGetTime = function() {
        var t = process.hrtime();
        return t[0] * 0.001 + t[1] * 1e-6;
    };
} else {
    iGetTime = function getTime() {
        return new Date().getTime();
    };
}

export const getTime = iGetTime


/* helper for interaction: pointer, touch, mouse Listeners
used by LGraphCanvas DragAndScale ContextMenu*/
export const pointerevents_method = "mouse" // "mouse"|"pointer" use mouse for retrocompatibility issues? (none found @ now)
// TODO implement pointercancel, gotpointercapture, lostpointercapture, (pointerover, pointerout if necessary)

export function pointerListenerAdd (oDOM, sEvIn, fCall, capture=false) {
    if (!oDOM || !oDOM.addEventListener || !sEvIn || typeof fCall!=="function"){
        //console.log("cant pointerListenerAdd "+oDOM+", "+sEvent+", "+fCall);
        return; // -- break --
    }
    
    var sMethod = pointerevents_method
    var sEvent = sEvIn;
    
    // UNDER CONSTRUCTION
    // convert pointerevents to touch event when not available
    if (sMethod=="pointer" && !window.PointerEvent){ 
        console.warn("sMethod=='pointer' && !window.PointerEvent");
        console.log("Converting pointer["+sEvent+"] : down move up cancel enter TO touchstart touchmove touchend, etc ..");
        switch(sEvent){
            case "down":{
                sMethod = "touch";
                sEvent = "start";
                break;
            }
            case "move":{
                sMethod = "touch";
                //sEvent = "move";
                break;
            }
            case "up":{
                sMethod = "touch";
                sEvent = "end";
                break;
            }
            case "cancel":{
                sMethod = "touch";
                //sEvent = "cancel";
                break;
            }
            case "enter":{
                console.log("debug: Should I send a move event?"); // ???
                break;
            }
            // case "over": case "out": not used at now
            default:{
                console.warn("PointerEvent not available in this browser ? The event "+sEvent+" would not be called");
            }
        }
    }

    switch(sEvent){
        //both pointer and move events
        case "down": case "up": case "move": case "over": case "out": case "enter":
        {
            oDOM.addEventListener(sMethod+sEvent, fCall, capture);
        }
        // only pointerevents
        case "leave": case "cancel": case "gotpointercapture": case "lostpointercapture":
        {
            if (sMethod!="mouse"){
                return oDOM.addEventListener(sMethod+sEvent, fCall, capture);
            }
        }
        // not "pointer" || "mouse"
        default:
            return oDOM.addEventListener(sEvent, fCall, capture);
    }
}

export function pointerListenerRemove(oDOM, sEvent, fCall, capture=false) {
    if (!oDOM || !oDOM.removeEventListener || !sEvent || typeof fCall!=="function"){
        //console.log("cant pointerListenerRemove "+oDOM+", "+sEvent+", "+fCall);
        return; // -- break --
    }
    switch(sEvent){
        //both pointer and move events
        case "down": case "up": case "move": case "over": case "out": case "enter":
        {
            if (pointerevents_method=="pointer" || pointerevents_method=="mouse"){
                oDOM.removeEventListener(pointerevents_method+sEvent, fCall, capture);
            }
        }
        // only pointerevents
        case "leave": case "cancel": case "gotpointercapture": case "lostpointercapture":
        {
            if (pointerevents_method=="pointer"){
                return oDOM.removeEventListener(pointerevents_method+sEvent, fCall, capture);
            }
        }
        // not "pointer" || "mouse"
        default:
            return oDOM.removeEventListener(sEvent, fCall, capture);
    }
}