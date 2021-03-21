# Kataw parser test case

## Input

`````js
var { ...{ x = 5 } } = {x : 1};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var { ...{ x = 5 } } = {x : 1};",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [
                                    {
                                        "kind": 32,
                                        "ellipsis": true,
                                        "key": {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 3,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 9
                                        },
                                        "value": {
                                            "kind": 16412,
                                            "ellipsis": false,
                                            "left": {
                                                "kind": 33554598,
                                                "propertyList": {
                                                    "kind": 33,
                                                    "properties": [
                                                        {
                                                            "kind": 203,
                                                            "ellipsis": false,
                                                            "left": {
                                                                "kind": 131102,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 1025,
                                                                "start": 10,
                                                                "end": 12
                                                            },
                                                            "right": {
                                                                "kind": 4261540,
                                                                "text": 5,
                                                                "rawText": "5",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 14,
                                                                "end": 16
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1024,
                                                            "start": 10,
                                                            "end": 16
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "trailingComma": false,
                                                    "transformFlags": 1025,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "start": 10,
                                                    "end": 16
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 9,
                                                "end": 18
                                            },
                                            "right": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 1,
                                            "start": 9,
                                            "end": 18
                                        },
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 5,
                                        "end": 18
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "symbol": null,
                                "start": 5,
                                "end": 18
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 20
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 25
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 29
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 30
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 30
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 30
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 31
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
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

