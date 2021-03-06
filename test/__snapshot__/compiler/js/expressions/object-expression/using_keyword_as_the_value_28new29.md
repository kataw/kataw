# Kataw parser test case

## Input

`````js
s = {s: new}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "s = {s: new}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "s",
                        "rawText": "s",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "operator": "=",
                    "right": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 196711,
                                        "text": "s",
                                        "rawText": "s",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "right": {
                                        "kind": 66204,
                                        "expression": {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 6,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 11
                                        },
                                        "typeArguments": null,
                                        "argumentList": null,
                                        "flags": 7,
                                        "intersects": false,
                                        "transformFlags": 32,
                                        "start": 2,
                                        "end": 11
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 11
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 11
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 12
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 12
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 11,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

