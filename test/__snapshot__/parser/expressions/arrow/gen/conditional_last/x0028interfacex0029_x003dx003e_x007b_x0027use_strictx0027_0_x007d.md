# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: conditional_last
> :: case: (interface) => { 'use strict'; 0 }
## Input

`````js
bar, (interface) => { 'use strict'; 0 };
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
                            "start": 16,
                            "end": 19
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "interface",
                                "rawText": "interface",
                                "flags": 768,
                                "start": 6,
                                "end": 15
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
                                        "start": 21,
                                        "end": 34
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
                                            "start": 35,
                                            "end": 37
                                        },
                                        "flags": 128,
                                        "start": 35,
                                        "end": 37
                                    }
                                ],
                                "multiline": false,
                                "flags": 256,
                                "start": 21,
                                "end": 37
                            },
                            "flags": 256,
                            "start": 19,
                            "end": 39
                        },
                        "flags": 256,
                        "start": 4,
                        "end": 39
                    }
                ],
                "flags": 256,
                "start": 0,
                "end": 39
            },
            "flags": 128,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "bar, (interface) => { 'use strict'; 0 };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

