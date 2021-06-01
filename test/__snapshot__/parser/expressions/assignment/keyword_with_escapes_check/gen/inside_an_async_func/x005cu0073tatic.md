# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\keyword_with_escapes_check\gen\inside_an_async_func
> :: test: inside an async func
> :: case: \u0073tatic
## Input

`````js
async () => {  \u0073tatic = x  }
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
                                    "text": "static",
                                    "rawText": "\\u0073tatic",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 26
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 26,
                                    "end": 28
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 30
                        }
                    ],
                    "flags": 16416,
                    "start": 13,
                    "end": 30
                },
                "flags": 32,
                "start": 11,
                "end": 33
            },
            "flags": 288,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "async () => {  \\u0073tatic = x  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

async () =>  {
  static = x;
}
```

### Diagnostics

```javascript
✔ No errors
```

