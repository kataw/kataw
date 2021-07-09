# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/labelled/keywords/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/labelled/keywords/gen/can_not_use_keywords_as_label_name
> :: test: can not use keywords as label name
> :: case: case
## Options

`````js
{}
`````
## Input

`````js
case: x
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
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 5,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "case: x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 0, end: 4
✖ Declaration or statement expected - start: 4, end: 5

```

