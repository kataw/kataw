# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<div >xxx{111}xxx{222}</div>
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<div >xxx{111}xxx{222}</div>",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66175,
                    "openingElement": {
                        "kind": 4228,
                        "tagName": {
                            "kind": 129,
                            "text": "div",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "parent": null,
                            "emitNode": null,
                            "start": 1,
                            "end": 4
                        },
                        "attributes": {
                            "kind": 123,
                            "attributesList": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "parent": null,
                            "emitNode": null,
                            "start": 4,
                            "end": 4
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "parent": null,
                        "emitNode": null,
                        "start": 0,
                        "end": 6
                    },
                    "children": {
                        "kind": 124,
                        "children": [
                            {
                                "kind": 137,
                                "text": "xxx",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 6,
                                "end": 9
                            },
                            {
                                "kind": 130,
                                "ellipsis": false,
                                "expression": {
                                    "kind": 4261540,
                                    "text": 111,
                                    "rawText": "111",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 10,
                                    "end": 13
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 9,
                                "end": 14
                            },
                            {
                                "kind": 137,
                                "text": "xxx",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 14,
                                "end": 17
                            },
                            {
                                "kind": 130,
                                "ellipsis": false,
                                "expression": {
                                    "kind": 4261540,
                                    "text": 222,
                                    "rawText": "222",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 18,
                                    "end": 21
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 17,
                                "end": 22
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "parent": null,
                        "emitNode": null,
                        "start": 6,
                        "end": 22
                    },
                    "closingElement": {
                        "kind": 4221,
                        "tagName": {
                            "kind": 129,
                            "text": "div",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "parent": null,
                            "emitNode": null,
                            "start": 24,
                            "end": 27
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "parent": null,
                        "emitNode": null,
                        "start": 22,
                        "end": 28
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 28
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 28
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 28
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

