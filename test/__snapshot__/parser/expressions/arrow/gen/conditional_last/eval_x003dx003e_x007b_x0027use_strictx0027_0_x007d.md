# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: conditional_last
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
bar, eval => { 'use strict'; 0 };
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 0,
                        "end": 3
                    },
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 768,
                            "start": 9,
                            "end": 12
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "eval",
                            "rawText": "eval",
                            "flags": 768,
                            "start": 4,
                            "end": 9
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
                                        "start": 14,
                                        "end": 27
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
                                            "start": 28,
                                            "end": 30
                                        },
                                        "flags": 128,
                                        "start": 28,
                                        "end": 30
                                    }
                                ],
                                "multiline": false,
                                "flags": 256,
                                "start": 14,
                                "end": 30
                            },
                            "flags": 256,
                            "start": 12,
                            "end": 32
                        },
                        "flags": 256,
                        "start": 4,
                        "end": 32
                    }
                ],
                "flags": 256,
                "start": 0,
                "end": 32
            },
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "bar, eval => { 'use strict'; 0 };",
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

