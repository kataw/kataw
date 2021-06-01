# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/statements/labelled/keywords/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\labelled\keywords\gen\can_not_use_keywords_as_label_name
> :: test: can not use keywords as label name
> :: case: false
## Input

`````js
false: x
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
                "kind": 205586437,
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 6,
                "end": 8
            },
            "flags": 16,
            "start": 6,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "false: x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 5, end: 6

```

