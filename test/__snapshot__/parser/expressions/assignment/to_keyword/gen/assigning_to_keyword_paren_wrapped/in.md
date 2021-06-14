# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assigning_to_keyword_paren_wrapped
> :: test: assigning to keyword paren wrapped
> :: case: in
## Options

`````js
{}
`````
## Input

`````js
(in = x)
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
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 1,
                            "end": 1
                        },
                        "operatorToken": {
                            "kind": 21006388,
                            "flags": 96,
                            "start": 1,
                            "end": 3
                        },
                        "right": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 3
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "flags": 32,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "(in = x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 1, end: 3
✖ Identifier expected - start: 3, end: 5
✖ Expected a `;` - start: 7, end: 8

```

