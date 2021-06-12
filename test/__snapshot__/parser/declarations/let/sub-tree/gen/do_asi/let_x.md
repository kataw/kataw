# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\sub-tree\gen\do_asi
> :: test: do asi
> :: case: let x
## Input

`````js
do let x
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
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 6,
                "end": 8
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
            "end": 8
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "start": 8,
                "end": 14
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 16,
                "end": 17
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 18,
                "end": 19
            },
            "flags": 81,
            "start": 8,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "do let x\nwhile (a);",
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
✖ Expected a `;` - start: 6, end: 8
✖ Declaration or statement expected - start: 8, end: 14

```

