# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_parens
> :: test: do parens
> :: case: /false//a
## Options

`````js
{}
`````
## Input

`````js
do( /false//a while
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 371,
                            "text": "/false/",
                            "flags": 96,
                            "start": 3,
                            "end": 11
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 13
                },
                "flags": 16,
                "start": 2,
                "end": 13
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 13,
                "end": 19
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 19,
                "end": 19
            },
            "flags": 80,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "do( /false//a while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 14, end: 19

```

