# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<ul>  <li>  </li> <li>x</li> </ul>
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<ul>  <li>  </li> <li>x</li> </ul>",
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
                            "text": "ul",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "parent": null,
                            "emitNode": null,
                            "start": 1,
                            "end": 3
                        },
                        "attributes": {
                            "kind": 123,
                            "attributesList": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "parent": null,
                            "emitNode": null,
                            "start": 3,
                            "end": 3
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "parent": null,
                        "emitNode": null,
                        "start": 0,
                        "end": 4
                    },
                    "children": {
                        "kind": 124,
                        "children": [
                            {
                                "kind": 137,
                                "text": "  ",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 4,
                                "end": 6
                            },
                            {
                                "kind": 66175,
                                "openingElement": {
                                    "kind": 4228,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "li",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 7,
                                        "end": 9
                                    },
                                    "attributes": {
                                        "kind": 123,
                                        "attributesList": [],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 9,
                                        "end": 9
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 6,
                                    "end": 10
                                },
                                "children": {
                                    "kind": 124,
                                    "children": [
                                        {
                                            "kind": 137,
                                            "text": "  ",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 10,
                                            "end": 12
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 10,
                                    "end": 12
                                },
                                "closingElement": {
                                    "kind": 4221,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "li",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 14,
                                        "end": 16
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 12,
                                    "end": 17
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 6,
                                "end": 17
                            },
                            {
                                "kind": 137,
                                "text": " ",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 17,
                                "end": 18
                            },
                            {
                                "kind": 66175,
                                "openingElement": {
                                    "kind": 4228,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "li",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "attributes": {
                                        "kind": 123,
                                        "attributesList": [],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 21,
                                        "end": 21
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 18,
                                    "end": 22
                                },
                                "children": {
                                    "kind": 124,
                                    "children": [
                                        {
                                            "kind": 137,
                                            "text": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 22,
                                            "end": 23
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 22,
                                    "end": 23
                                },
                                "closingElement": {
                                    "kind": 4221,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "li",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 23,
                                    "end": 28
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 18,
                                "end": 28
                            },
                            {
                                "kind": 137,
                                "text": " ",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 28,
                                "end": 29
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "parent": null,
                        "emitNode": null,
                        "start": 4,
                        "end": 29
                    },
                    "closingElement": {
                        "kind": 4221,
                        "tagName": {
                            "kind": 129,
                            "text": "ul",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "parent": null,
                            "emitNode": null,
                            "start": 31,
                            "end": 33
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "parent": null,
                        "emitNode": null,
                        "start": 29,
                        "end": 34
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 34
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 34
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 34
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
    "end": 34
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

