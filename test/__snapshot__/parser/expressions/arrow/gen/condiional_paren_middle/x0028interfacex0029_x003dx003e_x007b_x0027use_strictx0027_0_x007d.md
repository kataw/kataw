# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: e
> :: test: condiional_paren_middle
> :: case: (interface) => { 'use strict'; 0 }
## Input

`````js
bar ? ((interface) => { 'use strict'; 0 }) : baz;
`````
## Output

### CST

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
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 3,
                    "end": 5
                },
                "consequent": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 18,
                            "end": 21
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "interface",
                                "rawText": "interface",
                                "flags": 96,
                                "start": 8,
                                "end": 17
                            }
                        ],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [
                                    {
                                        "kind": 201392131,
                                        "text": "use strict",
                                        "rawText": "'use strict'",
                                        "flags": 4194400,
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
                                            "flags": 96,
                                            "start": 37,
                                            "end": 39
                                        },
                                        "flags": 16,
                                        "start": 37,
                                        "end": 39
                                    }
                                ],
                                "flags": 4194336,
                                "start": 23,
                                "end": 39
                            },
                            "flags": 32,
                            "start": 21,
                            "end": 41
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 41
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 42
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 42,
                    "end": 44
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "start": 44,
                    "end": 48
                },
                "flags": 32,
                "start": 0,
                "end": 48
            },
            "flags": 16,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "bar ? ((interface) => { 'use strict'; 0 }) : baz;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

bar ? ((interface) =>  {
        0;
      }) : baz;
```

### Diagnostics

```javascript
✔ No errors
```

