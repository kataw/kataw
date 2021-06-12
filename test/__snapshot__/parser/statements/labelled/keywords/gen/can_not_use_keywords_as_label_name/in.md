# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/statements/labelled/keywords/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\labelled\keywords\gen\can_not_use_keywords_as_label_name
> :: test: can not use keywords as label name
> :: case: in
## Input

`````js
in: x
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
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 0,
                    "end": 0
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 64,
                    "start": 0,
                    "end": 2
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 2,
                    "end": 2
                },
                "flags": 32,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 3,
                "end": 5
            },
            "flags": 16,
            "start": 3,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "in: x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 0, end: 2
✖ Identifier expected - start: 2, end: 3

```

