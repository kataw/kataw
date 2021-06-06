# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/statements/labelled/keywords/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/labelled/keywords/gen/can_not_use_keywords_as_label_name
> :: test: can not use keywords as label name
> :: case: if
## Input

`````js
if: x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 2,
                "end": 2
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 2,
                    "end": 2
                },
                "flags": 16,
                "start": 2,
                "end": 2
            },
            "elseKeyword": null,
            "alternate": null,
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
    "source": "if: x",
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
✖ Missing an opening parentheses - '( - start: 2, end: 3

```

