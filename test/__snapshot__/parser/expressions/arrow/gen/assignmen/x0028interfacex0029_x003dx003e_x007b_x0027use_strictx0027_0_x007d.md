# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: assignmen
> :: case: (interface) => { 'use strict'; 0 }
## Input

`````js
x = (interface) => { 'use strict'; 0 } ;
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
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 15,
                        "end": 18
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "interface",
                            "rawText": "interface",
                            "flags": 768,
                            "start": 5,
                            "end": 14
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
                                    "start": 20,
                                    "end": 33
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
                                        "start": 34,
                                        "end": 36
                                    },
                                    "flags": 128,
                                    "start": 34,
                                    "end": 36
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 20,
                            "end": 36
                        },
                        "flags": 256,
                        "start": 18,
                        "end": 38
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 38
                },
                "flags": 256,
                "start": 0,
                "end": 38
            },
            "flags": 128,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "x = (interface) => { 'use strict'; 0 } ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
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

