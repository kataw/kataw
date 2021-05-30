# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\arrow\position\gen\call
> :: test: call
> :: case: async x => {}
## Input

`````js
async x => {}()
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
                    "start": 7,
                    "end": 10
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 7
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
                        "statements": [],
                        "flags": 32,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 10,
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
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "start": 13,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "async x => {}()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Block body arrows can not be immediately invoked without a group - start: 13, end: 14
✖ Expected a `;` - start: 13, end: 14
✖ Expression expected - start: 15, end: 15

```

