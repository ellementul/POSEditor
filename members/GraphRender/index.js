import { Member, events } from '@ellementul/united-events-environment'
import { LGraph, LiteGraph, LGraphCanvas } from './litegraph/index.js'

class GraphRenderMember extends Member {
    constructor() {
        super()

        this.graph = new LGraph()

        const canvas = document.createElement("canvas")
        document.body.appendChild(canvas)

        const gCanvas = new LGraphCanvas(canvas, this.graph)

        this.onEvent(events.buildEvent, () => this.createCanvas()) // Subscribing on event
        
        this.role = "GraphRender"
    }

    createCanvas () {
        const LINK = "Link" 

        //node constructor class
        function MyAddNode() {
            this.addInput("Above", LINK)
            this.addOutput("Below", LINK)
        }

        //name to show
        MyAddNode.title = "Point";

        //function to call when the node is executed
        MyAddNode.prototype.onConnectInput = function() {
            console.log(arguments)
            this.addInput("Above", LINK)
        }

        //register in the system
        LiteGraph.registerNodeType("point", MyAddNode );

        const node_const = LiteGraph.createNode("point");
        node_const.pos = [200,200];
        this.graph.add(node_const);

        // node_const.connect(0, node_watch, 0 );
        }
    }

const exportEvents = { // Export of your events
}

export {
    GraphRenderMember
  // exportEvents as events
}