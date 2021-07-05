# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/position/gen/lhs_div_div
> :: test: lhs div div
> :: case: async x => ok
## Options

`````js
{}
`````
## Input

`````js
async x => ok
/ x / g
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
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 7,
                    "end": 10
                },
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "start": 10,
                            "end": 13
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 97,
                            "start": 13,
                            "end": 15
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 97,
                        "start": 10,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 96,
                        "start": 17,
                        "end": 19
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "g",
                        "rawText": "g",
                        "flags": 96,
                        "start": 19,
                        "end": 21
                    },
                    "flags": 97,
                    "start": 10,
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
    "source": "async x => ok\n/ x / g",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

async x =>  ok /  x /  g;
```

### Diagnostics

```javascript
✔ No errors
```

