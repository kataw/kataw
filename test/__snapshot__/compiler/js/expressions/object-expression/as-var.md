# Kataw parser test case

## Input

`````js
var {...[]} = {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var {...[]} = {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 33554598,
                                "propertyList": {
                                    "kind": 33,
                                    "properties": [
                                        {
                                            "kind": 32,
                                            "ellipsis": true,
                                            "key": {
                                                "kind": 65591,
                                                "expression": {
                                                    "kind": 131322,
                                                    "text": "",
                                                    "flags": 6,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 9,
                                                    "end": 9
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 131073,
                                                "start": 8,
                                                "end": 10
                                            },
                                            "value": {
                                                "kind": 134217756,
                                                "ellipsis": false,
                                                "left": {
                                                    "kind": 131102,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 2,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 10,
                                                    "end": 10
                                                },
                                                "right": null,
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 10,
                                                "end": 10
                                            },
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 5,
                                            "end": 10
                                        }
                                    ],
                                    "multiline": false,
                                    "trailingComma": false,
                                    "transformFlags": 1025,
                                    "flags": 2,
                                    "intersects": false,
                                    "start": 5,
                                    "end": 10
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 11
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 15
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 16
                            },
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 16
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 16
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 16
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "':' expected.",
            "start": 10,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

