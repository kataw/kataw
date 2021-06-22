# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/let/sub-tree/gen/for_loop
> :: test: for loop
> :: case: let
>          [] = y
## Options

`````js
{}
`````
## Input

`````js
for (;;) let
[] = y
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
                    "kind": 125,
                    "left": {
                        "kind": 130,
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
                            "rawText": "",
                            "flags": 64,
                            "start": 14,
                            "end": 14
                        },
                        "flags": 536870944,
                        "start": 8,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 19
                },
                "flags": 16,
                "start": 8,
                "end": 19
            },
            "flags": 80,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "for (;;) let\n[] = y",
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
✖ `let 
 [` is a restricted production at the start of a statement - start: 8, end: 12
✖ An member access expression should take an argument. - start: 8, end: 15
✖ Identifier expected - start: 14, end: 15

```

