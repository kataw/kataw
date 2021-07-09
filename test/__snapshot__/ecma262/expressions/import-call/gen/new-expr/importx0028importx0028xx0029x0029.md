# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/import-call/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/import-call/gen/new-expr
> :: test: new-expr
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
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 206,
                    "importKeyword": {
                        "kind": 37814364,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 13
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 15
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 16
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 6,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "import(import(x))",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

