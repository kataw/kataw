# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\sub-tree\gen\do_asi
> :: test: do asi
> :: case: let {x} = y
## Input

`````js
do let {x} = y
while (a);
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
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 8,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 8,
                        "end": 9
                    },
                    "flags": 48,
                    "start": 6,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 12,
                    "end": 14
                },
                "flags": 32,
                "start": 6,
                "end": 14
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
                "flags": 81,
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
            "flags": 81,
            "start": 14,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "do let {x} = y\nwhile (a);",
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
✖ Expected a `;` - start: 6, end: 8
✖ Declaration or statement expected - start: 14, end: 20

```

