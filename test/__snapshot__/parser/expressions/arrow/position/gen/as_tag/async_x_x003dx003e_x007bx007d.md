# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/position/gen/as_tag
> :: test: as tag
> :: case: async x => {}
## Input

`````js
async x => {}`foo`
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
                "kind": 458761,
                "text": "foo",
                "rawText": "foo",
                "flags": 134217824,
                "start": 13,
                "end": 18
            },
            "flags": 16,
            "start": 13,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "async x => {}`foo`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Block body arrows can not be immediately tagged without a group - start: 13, end: 18
✖ Expected a `;` - start: 13, end: 18

```

