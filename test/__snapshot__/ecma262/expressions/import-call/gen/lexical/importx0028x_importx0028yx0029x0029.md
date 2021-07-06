# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/import-call/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/import-call/gen/lexical
> :: test: lexical
> :: case: import(x,import(y))
## Options

`````js
{}
`````
## Input

`````js
import(x,import(y))
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
                            "transformFlags": 0,
                            "start": 0,
                            "end": 6
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 8
                    },
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 15
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 17
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 18
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "import(x,import(y))",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Dynamic import must have one specifier as an argument. - start: 8, end: 9
✖ Expected a `;` - start: 18, end: 19

```

