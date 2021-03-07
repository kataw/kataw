# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<div >xxx{function(){return <div id={aaa}>111</div>}}xxx{222}</div>
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<div >xxx{function(){return <div id={aaa}>111</div>}}xxx{222}</div>",
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
                            "start": 1,
                            "end": 4
                        },
                        "attributes": {
                            "kind": 123,
                            "attributesList": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 4,
                            "end": 4
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
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
                                "start": 6,
                                "end": 9
                            },
                            {
                                "kind": 130,
                                "ellipsis": false,
                                "expression": {
                                    "kind": 8456285,
                                    "name": null,
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 20
                                    },
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [
                                                {
                                                    "kind": 2097346,
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
                                                                "start": 29,
                                                                "end": 32
                                                            },
                                                            "attributes": {
                                                                "kind": 123,
                                                                "attributesList": [
                                                                    {
                                                                        "kind": 122,
                                                                        "name": {
                                                                            "kind": 129,
                                                                            "text": "id",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 8192,
                                                                            "start": 32,
                                                                            "end": 35
                                                                        },
                                                                        "initializer": {
                                                                            "kind": 130,
                                                                            "ellipsis": false,
                                                                            "expression": {
                                                                                "kind": 196712,
                                                                                "text": "aaa",
                                                                                "rawText": "aaa",
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 37,
                                                                                "end": 40
                                                                            },
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 8192,
                                                                            "start": 36,
                                                                            "end": 41
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 8192,
                                                                        "start": 32,
                                                                        "end": 41
                                                                    }
                                                                ],
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 8192,
                                                                "start": 32,
                                                                "end": 41
                                                            },
                                                            "typeArguments": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 27,
                                                            "end": 42
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
                                                                    "start": 42,
                                                                    "end": 45
                                                                }
                                                            ],
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 42,
                                                            "end": 45
                                                        },
                                                        "closingElement": {
                                                            "kind": 4221,
                                                            "tagName": {
                                                                "kind": 129,
                                                                "text": "div",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 8192,
                                                                "start": 47,
                                                                "end": 50
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 45,
                                                            "end": 51
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 8192,
                                                        "start": 27,
                                                        "end": 51
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 51
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 51
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 52
                                    },
                                    "typeParameters": null,
                                    "type": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 52
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 9,
                                "end": 53
                            },
                            {
                                "kind": 137,
                                "text": "xxx",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "start": 53,
                                "end": 56
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
                                    "start": 57,
                                    "end": 60
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 56,
                                "end": 61
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 6,
                        "end": 61
                    },
                    "closingElement": {
                        "kind": 4221,
                        "tagName": {
                            "kind": 129,
                            "text": "div",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 63,
                            "end": 66
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 61,
                        "end": 67
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 67
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 67
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 67
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 67
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

