# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\sub-tree\gen\async
> :: test: async
> :: case: let {x} = y
## Input

`````js
async let {x} = y
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
                "arrowToken": null,
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 5,
                    "end": 9
                },
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
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 12
                                },
                                "flags": 16,
                                "start": 11,
                                "end": 12
                            }
                        ],
                        "flags": 32,
                        "start": 11,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 13
                },
                "flags": 288,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "start": 15,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "async let {x} = y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 13, end: 15

```

