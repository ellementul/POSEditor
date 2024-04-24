export const debug = false

// if true, all newly created nodes/links will use string UUIDs for their id fields instead of integers.
    // use this if you must have node IDs that are unique across all graphs and subgraphs.
export const use_uuids =  false

export const CANVAS_GRID_SIZE = 10

export const NODE_TITLE_HEIGHT = 30

export const NODE_SLOT_HEIGHT = 20

export const NODE_WIDGET_HEIGHT = 20

export const NODE_TEXT_SIZE = 14

export const SHAPES = {
    //shapes are used for nodes but also for slots
    BOX_SHAPE: 1,
    ROUND_SHAPE: 2,
    CIRCLE_SHAPE: 3,
    CARD_SHAPE: 4,
    ARROW_SHAPE: 5,
    GRID_SHAPE: 6, // intended for slot arrays
}

export const NODE_MODES_EXC = {
    ALWAYS: 0,
    ON_EVENT: 1,
    NEVER: 2,
    ON_TRIGGER: 3
}

export const EVENT = -1
export const ACTION = -1