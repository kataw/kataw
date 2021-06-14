# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/sub-tree/gen/do_semi
> :: test: do semi
> :: case: let
>          {} = y
## Options

`````js
{}
`````
## Input

`````js
do let
{} = y; while (a);
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
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 8,
                        "end": 8
                    },
                    "flags": 49,
                    "start": 6,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 9,
                    "end": 11
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "flags": 32,
                "start": 6,
                "end": 13
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 2,
                    "end": 6
                },
                "flags": 16,
                "start": 2,
                "end": 6
            },
            "flags": 80,
            "start": 0,
            "end": 14
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 14,
                "end": 20
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 22,
                "end": 23
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 24,
                "end": 25
            },
            "flags": 80,
            "start": 14,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "do let\n{} = y; while (a);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 7, end: 8
✖ Declaration or statement expected - start: 13, end: 14

```

