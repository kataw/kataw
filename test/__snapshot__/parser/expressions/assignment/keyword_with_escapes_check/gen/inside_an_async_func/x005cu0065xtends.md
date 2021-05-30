# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\assignment\keyword_with_escapes_check\gen\inside_an_async_func
> :: test: inside an async func
> :: case: \u0065xtends
## Input

`````js
async () => {  \u0065xtends = x  }
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
                    "statements": [],
                    "flags": 16416,
                    "start": 13,
                    "end": 13
                },
                "flags": 32,
                "start": 11,
                "end": 13
            },
            "flags": 288,
            "start": 0,
            "end": 13
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
    "source": "async () => {  \\u0065xtends = x  }",
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
✖ The parser expected to find a '}' to match the '{' token here - start: 13, end: 27
✖ Declaration or statement expected - start: 27, end: 29
✖ Declaration or statement expected - start: 31, end: 34

```

