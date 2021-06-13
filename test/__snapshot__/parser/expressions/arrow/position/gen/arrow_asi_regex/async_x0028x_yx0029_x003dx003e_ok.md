# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/position/gen/arrow_asi_regex
> :: test: arrow asi regex
> :: case: async (x, y) => ok
## Options

`````js
{}
`````
## Input

`````js
async (x, y) => ok
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
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 12,
                "end": 15
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 7,
                    "end": 8
                },
                {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 9,
                    "end": 11
                }
            ],
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
                        "start": 15,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 97,
                        "start": 18,
                        "end": 20
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 20,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 96,
                    "start": 21,
                    "end": 22
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 22,
                    "end": 22
                },
                "flags": 32,
                "start": 15,
                "end": 22
            },
            "flags": 288,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "async (x, y) => ok\n/x/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 22, end: 22

```

