# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: conditional
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
eval => { 'use strict'; 0 } , bar;
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
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 768,
                            "start": 4,
                            "end": 7
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "eval",
                            "rawText": "eval",
                            "flags": 768,
                            "start": 0,
                            "end": 4
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
                                        "start": 9,
                                        "end": 22
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
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 128,
                                        "start": 23,
                                        "end": 25
                                    }
                                ],
                                "multiline": false,
                                "flags": 256,
                                "start": 9,
                                "end": 25
                            },
                            "flags": 256,
                            "start": 7,
                            "end": 27
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 27
                    },
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 768,
                        "start": 29,
                        "end": 33
                    }
                ],
                "flags": 256,
                "start": 0,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "eval => { 'use strict'; 0 } , bar;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
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

