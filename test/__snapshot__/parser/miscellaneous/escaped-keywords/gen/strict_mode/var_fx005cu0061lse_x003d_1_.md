# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/escaped-keywords/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\escaped-keywords\gen\strict_mode
> :: test: strict mode
> :: case: var f\u0061lse = 1;
## Input

`````js
var f\u0061lse = 1;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "start": 3,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205586437,
                    "flags": 16480,
                    "start": 3,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 14,
                    "end": 16
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 16,
                    "end": 18
                },
                "flags": 32,
                "start": 3,
                "end": 18
            },
            "flags": 16,
            "start": 3,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "var f\\u0061lse = 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 3, end: 14
✖ Keywords cannot contain escape characters - start: 3, end: 14
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 14, end: 16

```

