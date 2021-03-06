# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
let x = () => import {x} from "y"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "let x = () => import {x} from \"y\"",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 5
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67592,
                                "typeParameters": null,
                                "arrowParameters": {
                                    "kind": 65545,
                                    "elements": [],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 7
                                },
                                "contents": {
                                    "kind": 66156,
                                    "typeArguments": null,
                                    "expression": {
                                        "kind": 67224232,
                                        "propertyList": {
                                            "kind": 65722,
                                            "properties": [
                                                {
                                                    "kind": 196712,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 22,
                                                    "end": 23
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 23
                                        },
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 24
                                    },
                                    "flags": 65538,
                                    "intersects": false,
                                    "transformFlags": 262152,
                                    "start": 13,
                                    "end": 24
                                },
                                "flags": 536936450,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 24
                            },
                            "flags": 65538,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 24
                        },
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "from",
                                "rawText": "from",
                                "flags": 65538,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 24,
                                "end": 29
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 29
                        }
                    ],
                    "flags": 65554,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 29
                },
                "flags": 65554,
                "intersects": false,
                "transformFlags": 769,
                "start": 0,
                "end": 29
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "y",
                    "rawText": "y",
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 33
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 29,
                "end": 33
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 33
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 21,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "')' expected.",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 30,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

