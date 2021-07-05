# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/import-call/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/import-call/gen/stand-alone
> :: test: stand-alone
> :: case: import(import(x))
## Options

`````js
{}
`````
## Input

`````js
import(import(x))
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
                    "kind": 206,
                    "importKeyword": {
                        "kind": 37814364,
                        "flags": 64,
                        "start": 7,
                        "end": 13
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
                    "start": 13,
                    "end": 16
                },
                "flags": 32,
                "start": 6,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "import(import(x))",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

import(import(x));
```

### Diagnostics

```javascript
✔ No errors
```

