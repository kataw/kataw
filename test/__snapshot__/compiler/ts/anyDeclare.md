# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
declare var x: any;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare var x: any;",
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
                            "start": 11,
                            "end": 13
                        },
                        "exclamation": false,
                        "type": {
                            "kind": 4202498,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 14,
                            "end": 18
                        },
                        "initializer": null,
                        "flags": 11,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 18
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 18
            },
            "flags": 402653184,
            "symbol": null,
            "transformFlags": 0,
            "start": 7,
            "end": 19
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
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

