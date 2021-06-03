# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\keyword_with_escapes_check\gen\inside_an_async_func
> :: test: inside an async func
> :: case: \u0069mplements
## Input

`````js
async () => {  \u0069mplements = x  }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
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
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "implements",
                                    "rawText": "\\u0069mplements",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 30
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 30,
                                    "end": 32
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 32,
                                    "end": 34
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 34
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 34
                        }
                    ],
                    "flags": 16416,
                    "start": 13,
                    "end": 34
                },
                "flags": 32,
                "start": 11,
                "end": 37
            },
            "flags": 288,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "async () => {  \\u0069mplements = x  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

async () =>  {
  implements = x;
}
```

### Diagnostics

```javascript
✔ No errors
```

