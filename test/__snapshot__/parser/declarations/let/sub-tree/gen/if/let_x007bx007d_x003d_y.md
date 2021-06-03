# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/declarations/let/sub-tree/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\sub-tree\gen\if
> :: test: if
> :: case: let
>          {} = y
## Input

`````js
if (a) let
{} = y
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
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 6,
                    "end": 10
                },
                "flags": 16,
                "start": 6,
                "end": 10
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 12,
                "end": 12
            },
            "flags": 16,
            "start": 10,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "start": 15,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "if (a) let\n{} = y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 15, end: 17

```

