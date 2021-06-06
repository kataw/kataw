# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\arrow\position\gen\arrow_asi_regex
> :: test: arrow asi regex
> :: case: async async => ok
## Input

`````js
async async => ok
/x/
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
                            "kind": 35640,
                            "flags": 65,
                            "start": 17,
                            "end": 19
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 19,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 14,
                        "end": 20
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 64,
                        "start": 20,
                        "end": 21
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 21,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 21
                },
                "flags": 288,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "async async => ok\n/x/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 21, end: 21

```

