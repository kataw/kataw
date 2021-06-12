# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/binary/gen/typeof_arg
> :: test: typeof arg
> :: case: a instanceof b + c
## Options

`````js
{}
`````
## Input

`````js
typeof a instanceof b + c
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 138477613,
                            "flags": 64,
                            "start": 0,
                            "end": 6
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 6,
                            "end": 8
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 4229173,
                        "flags": 64,
                        "start": 8,
                        "end": 19
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 19,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 64,
                    "start": 21,
                    "end": 23
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 23,
                    "end": 25
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "typeof a instanceof b + c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

typeof a inctanceof b + c;
```

### Diagnostics

```javascript
✔ No errors
```

