# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_parens
> :: test: do parens
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
do( false while
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
                        "kind": 205586437,
                        "flags": 96,
                        "start": 3,
                        "end": 9
                    },
                    "flags": 2,
                    "start": 32,
                    "end": 9
                },
                "flags": 16,
                "start": 2,
                "end": 9
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 9,
                "end": 15
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 15,
                "end": 15
            },
            "flags": 80,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "do( false while",
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
✖ Expected a ')' to match the '(' token here - start: 10, end: 15

```

