# Kataw parser test case

## Input

`````js
let x = () => --
a;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 162,
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "value": "x",
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
                            "parameters": [],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196636,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 13,
                                    "end": 16
                                },
                                "expression": {
                                    "kind": 81921,
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 16,
                                    "end": 18
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 13,
                                "end": 18
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 7,
                            "end": 18
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 18
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "let x = () => --\na;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
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

