# Kataw parser test case

## Input

`````js
(s: any) => x
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 8,
                    "end": 11
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "original": "s",
                            "text": "s",
                            "rawText": "s",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234252,
                                "flags": 64,
                                "start": 3,
                                "end": 7
                            },
                            "flags": 0,
                            "start": 2,
                            "end": 7
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 0,
                        "end": 7
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "original": "x",
                    "text": "x",
                    "rawText": " x",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "(s: any) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

