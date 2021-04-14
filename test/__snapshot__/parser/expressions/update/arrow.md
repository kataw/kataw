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
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 10,
                                "end": 13
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196636,
                                    "flags": 768,
                                    "start": 13,
                                    "end": 16
                                },
                                "expression": {
                                    "kind": 81921,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 16,
                                    "end": 18
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 18
                            },
                            "flags": 256,
                            "start": 7,
                            "end": 18
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 18
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "let x = () => --\na;",
    "fileName": "__root__",
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

