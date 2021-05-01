# Kataw parser test case

## Input

`````js
var a = (b) => c;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": " a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 11,
                                "end": 14
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 10
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": " c",
                                "flags": 96,
                                "start": 14,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 16
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "var a = (b) => c;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
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

