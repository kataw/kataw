# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/statements/labelled/keywords/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\labelled\keywords\gen\can_not_use_keywords_as_label_name
> :: test: can not use keywords as label name
> :: case: void
## Input

`````js
void: x
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
                "kind": 126,
                "operandToken": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 0,
                    "end": 4
                },
                "operand": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 4,
                    "end": 4
                },
                "flags": 32,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "flags": 16,
            "start": 5,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "void: x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 4, end: 5

```

