# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/statements/labelled/keywords/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\labelled\keywords\gen\can_not_use_keywords_as_label_name
> :: test: can not use keywords as label name
> :: case: finally
## Input

`````js
finally: x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 0,
                    "end": 0
                },
                "flags": 16,
                "start": 0,
                "end": 0
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 7,
                    "end": 7
                },
                "flags": 16,
                "start": 7,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "flags": 16,
            "start": 8,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "finally: x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 0, end: 7
✖ Declaration or statement expected - start: 7, end: 8

```

