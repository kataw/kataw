# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: conditional_paren
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
bar ? baz : ( eval => { 'use strict'; 0 } );
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
                    "kind": 22,
                    "flags": 768,
                    "start": 3,
                    "end": 5
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 768,
                    "start": 5,
                    "end": 9
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "alternate": {
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
                        "parameters": {
                            "kind": 134299649,
                            "text": "eval",
                            "rawText": "eval",
                            "flags": 768,
                            "start": 13,
                            "end": 18
                        },
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
                                            "kind": 134299649,
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
                        "start": 13,
                        "end": 41
                    },
                    "flags": 256,
                    "start": 11,
                    "end": 43
                },
                "flags": 256,
                "start": 0,
                "end": 43
            },
            "flags": 128,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "bar ? baz : ( eval => { 'use strict'; 0 } );",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

