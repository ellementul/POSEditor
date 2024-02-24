export class POS {
  // constructor () {
  //   this.nodes = new Map
  //   this.eldestes = new Set
  //   this.youngestes = new Set
  // }

  // get (uuid) {
  //   const nodeAndRelations = this.nodes.get(uuid)
  //   return {
  //     uuid,
  //     node: nodeAndRelations.node,
  //     parents: Array.from(node.parents),
  //     children: Array.from(node.children),
  //     isEldest: this.eldestes.has(uuid),
  //     isYoungest: this.youngestes.has(uuid)
  //   }
  // }

  // addNode({ node, parents = [], children = [] }) {
  //   const uuid = node.uuid

  //   if(this.nodes.has(uuid))
  //     throw new Error(`Node with ${uuid} uuid is existed already!`)

  //   this.nodes.set(uuid, {
  //     uuid,
  //     node,
  //     parents: new Set(),
  //     children: new Set()
  //   })

  //   for (const parent of parents)
  //     this.addRealation(parent, uuid)

  //   for (const child of children)
  //     this.addRealation(uuid, child)

  //   if(this.nodes.get(uuid).parents.size === 0)
  //     this.eldestes.add(uuid)

  //   if(this.nodes.get(uuid).children.size === 0)
  //     this.youngestes.add(uuid)
  // }

  // addRealation ({ parent, child }) {
  //   const parentNode = this.nodes.get(parent)
  //   const childNode = this.nodes.get(child)

  //   this.addParent(childNode, parent)
  //   this.addParent(parentNode, child)
  // }

  // addParent(node, parent) {
  //   if(!this.nodes.has(parent))
  //     throw new Error(`Parent node with ${parent} uuid has to be in POS!`)

  //   node.parents.add(parent)

  //   if(this.eldestes.has(node.uuid))
  //     this.eldestes.delete(node.uuid)
  // }

  // addChild(node, child) {
  //   if(!this.nodes.has(child))
  //     throw new Error(`Child node with ${child} uuid has to be in POS!`)

  //   node.children.add(child)

  //   if(this.youngestes.has(node.uuid))
  //     this.youngestes.delete(node.uuid)
  // }
}

// class Node {
//   constructor(name, data) {
    
//   }

// }