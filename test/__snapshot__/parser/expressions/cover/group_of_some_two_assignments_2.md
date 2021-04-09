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
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 81921,
                                    "value": "b",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 9,
                                    "end": 10
                                }
                            ],
                            "asyncToken": false,
                            "returnType": null,
                            "contents": {
                                "kind": 81921,
                                "value": "c",
                                "autofix": 0,
                                "flags": 768,
                                "start": 14,
                                "end": 16
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 7,
                            "end": 16
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 16
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "var a = (b) => c;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
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

