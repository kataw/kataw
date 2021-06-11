# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/import-call/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/import-call/gen/new-expr
> :: test: new-expr
> :: case: import(x,y=z)
## Options

`````js
{}
`````
## Input

`````js
import(x,y=z)
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 80,
                            "start": 0,
                            "end": 6
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 32,
                        "start": 6,
                        "end": 8
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 9,
                            "end": 10
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 10,
                            "end": 11
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        },
                        "flags": 32,
                        "start": 9,
                        "end": 12
                    }
                ],
                "flags": 32,
                "start": 6,
                "end": 12
            },
            "flags": 16,
            "start": 6,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "import(x,y=z)",
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
✖ Dynamic import must have one specifier as an argument. - start: 8, end: 9
✖ Expected a `;` - start: 12, end: 13

```

