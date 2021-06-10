# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\sub-tree\gen\for-of_loop
> :: test: for-of loop
> :: case: let {x}
## Input

`````js
for (a of b) let {x}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 5,
                "end": 6
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 6,
                "end": 9
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 9,
                "end": 11
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 12,
                    "end": 16
                },
                "flags": 16,
                "start": 12,
                "end": 16
            },
            "flags": 80,
            "start": 0,
            "end": 16
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 18,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 18,
                        "end": 19
                    }
                ],
                "flags": 16,
                "start": 18,
                "end": 19
            },
            "flags": 16,
            "start": 16,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "for (a of b) let {x}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 16, end: 18

```

