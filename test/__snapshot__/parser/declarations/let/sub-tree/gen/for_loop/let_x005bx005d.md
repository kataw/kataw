# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\sub-tree\gen\for_loop
> :: test: for loop
> :: case: let
>          []
## Input

`````js
for (;;) let
[]
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 536871042,
                    "member": {
                        "kind": 134299649,
                        "text": "let",
                        "rawText": "let",
                        "flags": 96,
                        "start": 8,
                        "end": 12
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 14,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 15
                },
                "flags": 16,
                "start": 8,
                "end": 15
            },
            "flags": 80,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "for (;;) let\n[]",
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
✖ `let 
 [` is a restricted production at the start of a statement - start: 8, end: 12
✖ An member access expression should take an argument. - start: 8, end: 15
✖ Identifier expected - start: 14, end: 15

```

