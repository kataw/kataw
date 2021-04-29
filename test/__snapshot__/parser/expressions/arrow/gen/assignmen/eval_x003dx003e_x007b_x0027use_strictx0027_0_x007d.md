# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: assignmen
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
x = eval => { 'use strict'; 0 } ;
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 8,
                        "end": 11
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "eval",
                        "rawText": "eval",
                        "flags": 96,
                        "start": 3,
                        "end": 8
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
                                    "flags": 4194400,
                                    "start": 13,
                                    "end": 26
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
                                        "start": 27,
                                        "end": 29
                                    },
                                    "flags": 16,
                                    "start": 27,
                                    "end": 29
                                }
                            ],
                            "flags": 4194336,
                            "start": 13,
                            "end": 29
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 31
                },
                "flags": 32,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "x = eval => { 'use strict'; 0 } ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
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

