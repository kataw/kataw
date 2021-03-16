# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export var bar;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export var bar;",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 16627,
                            "binding": {
                                "kind": 131102,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 10,
                                "end": 14
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 10,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 14
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 14
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
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

