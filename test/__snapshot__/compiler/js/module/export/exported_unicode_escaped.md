# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
var abc = 5;
export { \u0061bc }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var abc = 5;\nexport { \\u0061bc }",
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
                            "text": "abc",
                            "rawText": "abc",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 5,
                            "rawText": "5",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 11
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 11
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 12
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
                                "text": "abc",
                                "rawText": " \\u0061bc",
                                "flags": 8388608,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 30
                            },
                            "binding": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 30
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 30
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 32
            },
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 12,
            "end": 32
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

