# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-02
- From: kataw8/test\__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\keyword_with_escapes_check\gen\inside_an_async_func
> :: test: inside an async func
> :: case: fin\u0061lly
## Input

`````js
async () => {  fin\u0061lly = x  }
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
                            "kind": 159,
                            "tryKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 13,
                                    "end": 13
                                },
                                "flags": 16,
                                "start": 13,
                                "end": 13
                            },
                            "catchClause": null,
                            "finallyKeyword": {
                                "kind": 37757016,
                                "flags": 16448,
                                "start": 13,
                                "end": 27
                            },
                            "finallyBlock": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 16,
                                "start": 27,
                                "end": 27
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 27
                        }
                    ],
                    "flags": 16416,
                    "start": 13,
                    "end": 27
                },
                "flags": 32,
                "start": 11,
                "end": 27
            },
            "flags": 288,
            "start": 0,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 29,
                "end": 31
            },
            "flags": 16,
            "start": 29,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "async () => {  fin\\u0061lly = x  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 13, end: 27
✖ The parser expected to find a '}' to match the '{' token here - start: 27, end: 29
✖ Declaration or statement expected - start: 31, end: 34

```

