# Kataw parser test case

## Input

`````js
for (var v of [true]) { }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "for (var v of [true]) { }",
    "filename": "",
    "statements": [
        {
            "kind": 2099287,
            "initializer": {
                "kind": 16469,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 16627,
                            "binding": {
                                "kind": 131102,
                                "text": "v",
                                "rawText": "v",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 8,
                                "end": 10
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 8,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 10
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 10
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 10
            },
            "expression": {
                "kind": 98822,
                "elementList": {
                    "kind": 65605,
                    "elements": [
                        {
                            "kind": 4260391,
                            "text": true,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 19
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 20
            },
            "statement": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 23
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 25
            },
            "isAwait": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

