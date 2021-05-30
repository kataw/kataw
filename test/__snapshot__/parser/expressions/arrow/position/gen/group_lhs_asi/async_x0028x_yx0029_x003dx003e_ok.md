# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\arrow\position\gen\group_lhs_asi
> :: test: group lhs asi
> :: case: async (x, y) => ok
## Input

`````js
(async (x, y) => ok)
* x
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
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 13,
                            "end": 16
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 8,
                                "end": 9
                            },
                            {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 10,
                                "end": 12
                            }
                        ],
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 1,
                            "end": 6
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "start": 16,
                            "end": 19
                        },
                        "flags": 288,
                        "start": 1,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 20
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 65,
                    "start": 20,
                    "end": 22
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 22,
                    "end": 24
                },
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
    "source": "(async (x, y) => ok)\n* x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

(async (x, y) =>  ok) * x;
```

### Diagnostics

```javascript
✔ No errors
```

