# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/labelled/keywords/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/labelled/keywords/gen/can_not_use_keywords_as_label_name
> :: test: can not use keywords as label name
> :: case: null
## Options

`````js
{}
`````
## Input

`````js
null: x
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
                "kind": 138477575,
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "transformFlags": 4096,
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
    "source": "null: x",
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
✖ Expected a `;` - start: 4, end: 5

```

