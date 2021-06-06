# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/sub-tree/gen/do_asi
> :: test: do asi
> :: case: let
>          [] = y
## Input

`````js
do let
[] = y
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
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 21,
                "end": 22
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 65,
                "start": 13,
                "end": 19
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 536871042,
                        "member": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "start": 2,
                            "end": 6
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 8,
                            "end": 8
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
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
                    "start": 2,
                    "end": 13
                },
                "flags": 16,
                "start": 2,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "do let\n[] = y\nwhile (a);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `let 
 [` is a restricted production at the start of a statement - start: 2, end: 6
✖ An member access expression should take an argument. - start: 2, end: 9
✖ Identifier expected - start: 8, end: 9

```

