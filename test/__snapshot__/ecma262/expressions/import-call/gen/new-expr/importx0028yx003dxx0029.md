# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/import-call/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/import-call/gen/new-expr
> :: test: new-expr
> :: case: import(y=x)
## Options

`````js
{}
`````
## Input

`````js
import(y=x)
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
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 80,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 8,
                        "end": 9
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 9,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 10
                },
                "flags": 32,
                "start": 6,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "import(y=x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

import(y = x);
```

### Diagnostics

```javascript
✔ No errors
```

