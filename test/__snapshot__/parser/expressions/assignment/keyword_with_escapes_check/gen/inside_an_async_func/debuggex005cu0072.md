# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\keyword_with_escapes_check\gen\inside_an_async_func
> :: test: inside an async func
> :: case: debugge\u0072
## Input

`````js
async () => {  debugge\u0072 = x  }
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
                            "kind": 171,
                            "debuggerKeyword": {
                                "kind": 37757010,
                                "flags": 16464,
                                "start": 13,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 28
                        }
                    ],
                    "flags": 16416,
                    "start": 13,
                    "end": 28
                },
                "flags": 32,
                "start": 11,
                "end": 28
            },
            "flags": 288,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 30,
                "end": 32
            },
            "flags": 16,
            "start": 30,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "async () => {  debugge\\u0072 = x  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 13, end: 28
✖ Expected a `;` - start: 28, end: 30
✖ Declaration or statement expected - start: 32, end: 35

```

