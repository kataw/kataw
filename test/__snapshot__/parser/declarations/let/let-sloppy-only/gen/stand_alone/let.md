# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/declarations/let/let-sloppy-only/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\let\let-sloppy-only\gen\stand_alone
> :: test: stand alone
> :: case: let
## Input

`````js
let
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "let",
                "rawText": "let",
                "flags": 96,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 3
        }
    ],
    "isModule": false,
    "source": "let",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 3
}
```

### Printed

```javascript

let;
```

### Diagnostics

```javascript
✔ No errors
```

