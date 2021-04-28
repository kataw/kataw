# Kataw parser test case

## Input

`````js
async x =>  y
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
                    "flags": 7,
                    "start": 0,
                    "end": 10
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 0,
                        "end": 7
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "flags": 0,
                    "start": 512,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 10,
                    "end": 13
                },
                "flags": 2304,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "async x =>  y",
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

