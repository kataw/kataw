# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/labelled/keywords/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/labelled/keywords/gen/can_not_use_keywords_as_label_name
> :: test: can not use keywords as label name
> :: case: while
## Options

`````js
{}
`````
## Input

`````js
while: x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 5,
                "end": 5
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 5,
                "end": 5
            },
            "flags": 80,
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
    "source": "while: x",
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
✖ Missing an opening parentheses - '( - start: 5, end: 6

```

