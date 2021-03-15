# Kataw parser test case

## Input

`````js
x={...new}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x={...new}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operator": "=",
                "right": {
                    "kind": 98984,
                    "propertyList": {
                        "kind": 65722,
                        "properties": [
                            {
                                "kind": 65741,
                                "argument": {
                                    "kind": 66204,
                                    "expression": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 3,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 9
                                    },
                                    "typeArguments": null,
                                    "argumentList": null,
                                    "flags": 6,
                                    "intersects": false,
                                    "transformFlags": 32,
                                    "start": 1,
                                    "end": 9
                                },
                                "flags": 1,
                                "intersects": false,
                                "transformFlags": 4104,
                                "start": 6,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 9
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 10
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 9,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

