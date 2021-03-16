# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
var x; export {x: a}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var x; export {x: a}",
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
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 5
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 5
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 76,
            "declaration": null,
            "namedExports": {
                "kind": 152,
                "exportsList": {
                    "kind": 80,
                    "specifiers": [
                        {
                            "kind": 79,
                            "moduleExportName": null,
                            "name": {
                                "kind": 196711,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 16
                            },
                            "binding": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 16
                        }
                    ],
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 16
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 16
            },
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 6,
            "end": 16
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "a",
                "rawText": "a",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 19
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 17,
            "end": 19
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 19,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

