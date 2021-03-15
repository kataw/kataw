# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export const x = 10, y = 20
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export const x = 10, y = 20",
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
                            "initializer": {
                                "kind": 4261540,
                                "text": 10,
                                "rawText": "10",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 19
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 19
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
                                "start": 20,
                                "end": 22
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 4261540,
                                "text": 20,
                                "rawText": "20",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 27
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 27
                        }
                    ],
                    "flags": 8,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 27
                },
                "flags": 8,
                "symbol": null,
                "transformFlags": 769,
                "start": 0,
                "end": 27
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 1,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 27
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
    "end": 27
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

