# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export const x, y
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export const x, y",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 16525,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 12,
                                "end": 14
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 14
                        },
                        {
                            "kind": 16525,
                            "binding": {
                                "kind": 131102,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 15,
                                "end": 17
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 17
                        }
                    ],
                    "flags": 8,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 17
                },
                "flags": 8,
                "symbol": null,
                "transformFlags": 769,
                "start": 0,
                "end": 17
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 0,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

