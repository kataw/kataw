# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/array_with_assign_to_paren-wrapped
> :: test: array with assign to paren-wrapped
> :: case: return
## Options

`````js
{}
`````
## Input

`````js
async x => (return) = 1
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
                    "kind": 121,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 12
                },
                "flags": 288,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 80,
                "start": 12,
                "end": 18
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 18,
                "end": 18
            },
            "flags": 80,
            "start": 12,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 21,
                "end": 23
            },
            "flags": 16,
            "start": 21,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "async x => (return) = 1",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 12, end: 18
✖ A return statement can only be used within a function_body - start: 12, end: 18
✖ Identifier expected - start: 18, end: 19
✖ Declaration or statement expected - start: 19, end: 21

```

