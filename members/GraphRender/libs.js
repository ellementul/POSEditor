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