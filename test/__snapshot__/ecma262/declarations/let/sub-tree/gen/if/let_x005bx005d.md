# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/if
> :: test: if
> :: case: let
>          []
## Options

`````js
{}
`````
## Input

`````js
if (a) let
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
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "let",
                        "rawText": "let",
                        "flags": 96,
                        "start": 6,
                        "end": 10
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 536870944,
                    "start": 6,
                    "end": 13
                },
                "flags": 16,
                "start": 6,
                "end": 13
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "if (a) let\n[]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `let 
 [` is a restricted production at the start of a statement - start: 6, end: 10
✖ An member access expression should take an argument. - start: 6, end: 13
✖ Identifier expected - start: 12, end: 13

```

