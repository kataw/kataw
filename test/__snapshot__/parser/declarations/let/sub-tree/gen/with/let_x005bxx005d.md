# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\sub-tree\gen\with
> :: test: with
> :: case: let [x]
## Input

`````js
with (a) let [x]
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 80,
                "start": 0,
                "end": 4
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 6,
                "end": 7
            },
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
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 14,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 16
                },
                "flags": 16,
                "start": 8,
                "end": 16
            },
            "flags": 80,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "with (a) let [x]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `let 
 [` is a restricted production at the start of a statement - start: 8, end: 12

```

