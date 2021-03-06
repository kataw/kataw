# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<ul><li>111</li><li>222</li><li>333</li><li>444</li></ul>
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<ul><li>111</li><li>222</li><li>333</li><li>444</li></ul>",
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
                            "start": 1,
                            "end": 3
                        },
                        "attributes": {
                            "kind": 123,
                            "attributesList": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 3,
                            "end": 3
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 0,
                        "end": 4
                    },
                    "children": {
                        "kind": 124,
                        "children": [
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
                                        "start": 5,
                                        "end": 7
                                    },
                                    "attributes": {
                                        "kind": 123,
                                        "attributesList": [],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "start": 7,
                                        "end": 7
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 4,
                                    "end": 8
                                },
                                "children": {
                                    "kind": 124,
                                    "children": [
                                        {
                                            "kind": 137,
                                            "text": "111",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "parent": null,
                                            "start": 8,
                                            "end": 11
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 8,
                                    "end": 11
                                },
                                "closingElement": {
                                    "kind": 4221,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "li",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 11,
                                    "end": 16
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 4,
                                "end": 16
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
                                        "start": 17,
                                        "end": 19
                                    },
                                    "attributes": {
                                        "kind": 123,
                                        "attributesList": [],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "start": 19,
                                        "end": 19
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 16,
                                    "end": 20
                                },
                                "children": {
                                    "kind": 124,
                                    "children": [
                                        {
                                            "kind": 137,
                                            "text": "222",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "parent": null,
                                            "start": 20,
                                            "end": 23
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 20,
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
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 23,
                                    "end": 28
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 16,
                                "end": 28
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
                                        "start": 29,
                                        "end": 31
                                    },
                                    "attributes": {
                                        "kind": 123,
                                        "attributesList": [],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "start": 31,
                                        "end": 31
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 28,
                                    "end": 32
                                },
                                "children": {
                                    "kind": 124,
                                    "children": [
                                        {
                                            "kind": 137,
                                            "text": "333",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "parent": null,
                                            "start": 32,
                                            "end": 35
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 32,
                                    "end": 35
                                },
                                "closingElement": {
                                    "kind": 4221,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "li",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "start": 37,
                                        "end": 39
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 35,
                                    "end": 40
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 28,
                                "end": 40
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
                                        "start": 41,
                                        "end": 43
                                    },
                                    "attributes": {
                                        "kind": 123,
                                        "attributesList": [],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "start": 43,
                                        "end": 43
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 40,
                                    "end": 44
                                },
                                "children": {
                                    "kind": 124,
                                    "children": [
                                        {
                                            "kind": 137,
                                            "text": "444",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "parent": null,
                                            "start": 44,
                                            "end": 47
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 44,
                                    "end": 47
                                },
                                "closingElement": {
                                    "kind": 4221,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "li",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "start": 49,
                                        "end": 51
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 47,
                                    "end": 52
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 40,
                                "end": 52
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 4,
                        "end": 52
                    },
                    "closingElement": {
                        "kind": 4221,
                        "tagName": {
                            "kind": 129,
                            "text": "ul",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 54,
                            "end": 56
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 52,
                        "end": 57
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 57
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 57
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 57
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

