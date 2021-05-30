# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\arrow\position\gen\lhs_pow_asi
> :: test: lhs pow asi
> :: case: async async => ok
## Input

`````js
async async => ok
** x
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 11,
                    "end": 14
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 5,
                    "end": 11
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 96,
                        "start": 14,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 65,
                        "start": 17,
                        "end": 20
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 22
                },
                "flags": 288,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "async async => ok\n** x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

async async =>  ok ** x;
```

### Diagnostics

```javascript
✔ No errors
```

