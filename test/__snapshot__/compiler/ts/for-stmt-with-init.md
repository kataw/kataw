# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
for(var x = y in y);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "for(var x = y in y);",
    "filename": "",
    "statements": [
        {
            "kind": 2099286,
            "initializer": {
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
                            "start": 7,
                            "end": 9
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 196712,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 7,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 13
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 7,
                "end": 13
            },
            "expression": {
                "kind": 196712,
                "text": "y",
                "rawText": "y",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "statement": {
                "kind": 6291526,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 20
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 20
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

