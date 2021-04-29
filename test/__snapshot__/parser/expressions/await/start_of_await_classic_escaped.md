# Kataw parser test case

## Input

`````js
async () => { var \u0061wait; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 0,
                                "start": 13,
                                "end": 17
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "var",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 28
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 17,
                                        "end": 28
                                    }
                                ],
                                "flags": 16,
                                "start": 17,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 29
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 29
                },
                "flags": 32,
                "start": 11,
                "end": 31
            },
            "flags": 288,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "async () => { var \\u0061wait; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
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

