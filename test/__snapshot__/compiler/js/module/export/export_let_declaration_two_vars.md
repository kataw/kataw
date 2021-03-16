# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export let x, y
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export let x, y",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 142,
                "isConst": false,
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
                                "start": 10,
                                "end": 12
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 12
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
                                "start": 13,
                                "end": 15
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 15
                        }
                    ],
                    "flags": 8,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 15
                },
                "flags": 8,
                "symbol": null,
                "transformFlags": 769,
                "start": 0,
                "end": 15
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 15
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
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

