# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/expressions/arrow/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\arrow\gen\conditional_last
> :: test: conditional_last
> :: case: eval => { 'use strict'; 0 }
## Input

`````js
bar, eval => { 'use strict'; 0 };
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 0,
                        "end": 3
                    },
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 9,
                            "end": 12
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "eval",
                            "rawText": "eval",
                            "flags": 96,
                            "start": 4,
                            "end": 9
                        },
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
                                            "flags": 96,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "flags": 16,
                                        "start": 28,
                                        "end": 30
                                    }
                                ],
                                "flags": 4194336,
                                "start": 14,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 32
                        },
                        "flags": 32,
                        "start": 4,
                        "end": 32
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "bar, eval => { 'use strict'; 0 };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

bar, eval =>  {
    0;
  };
```

### Diagnostics

```javascript
✔ No errors
```

