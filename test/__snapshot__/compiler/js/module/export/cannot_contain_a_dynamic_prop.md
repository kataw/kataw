# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
var foo; export {[foo]}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var foo; export {[foo]}",
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 7
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 7
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 76,
            "declaration": null,
            "namedExports": {
                "kind": 152,
                "exportsList": {
                    "kind": 80,
                    "specifiers": [],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 17
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 17
            },
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 8,
            "end": 17
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 98822,
                "elementList": {
                    "kind": 65605,
                    "elements": [
                        {
                            "kind": 196712,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 21
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 22
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 17,
            "end": 22
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 17,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 22,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

