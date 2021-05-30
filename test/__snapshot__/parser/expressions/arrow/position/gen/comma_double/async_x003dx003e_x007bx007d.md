# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\arrow\position\gen\comma_double
> :: test: comma double
> :: case: async => {}
## Input

`````js
async => {}, async => {}
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
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 5,
                            "end": 8
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 0,
                            "end": 5
                        },
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 0,
                            "end": 5
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 11
                        },
                        "flags": 288,
                        "start": 0,
                        "end": 11
                    },
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 18,
                            "end": 21
                        },
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 12,
                            "end": 18
                        },
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 12,
                            "end": 18
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 23,
                                "end": 23
                            },
                            "flags": 32,
                            "start": 21,
                            "end": 24
                        },
                        "flags": 32,
                        "start": 12,
                        "end": 24
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "async => {}, async => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

async async =>  {}, async async =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

