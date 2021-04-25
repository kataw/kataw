# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: condiional_paren_middle
> :: case: (interface) => { 'use strict'; 0 }
## Input

`````js
bar ? ((interface) => { 'use strict'; 0 }) : baz;
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 768,
                    "start": 3,
                    "end": 5
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 768,
                            "start": 18,
                            "end": 21
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "interface",
                                "rawText": "interface",
                                "flags": 768,
                                "start": 8,
                                "end": 17
                            }
                        ],
                        "asyncToken": null,
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [
                                    {
                                        "kind": 201392131,
                                        "text": "use strict",
                                        "rawText": "use strict",
                                        "flags": 67109632,
                                        "start": 23,
                                        "end": 36
                                    }
                                ],
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 768,
                                            "start": 37,
                                            "end": 39
                                        },
                                        "flags": 128,
                                        "start": 37,
                                        "end": 39
                                    }
                                ],
                                "multiline": false,
                                "flags": 256,
                                "start": 23,
                                "end": 39
                            },
                            "flags": 256,
                            "start": 21,
                            "end": 41
                        },
                        "flags": 256,
                        "start": 7,
                        "end": 41
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 42
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 42,
                    "end": 44
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 768,
                    "start": 44,
                    "end": 48
                },
                "flags": 256,
                "start": 0,
                "end": 48
            },
            "flags": 128,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "text": "bar ? ((interface) => { 'use strict'; 0 }) : baz;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

