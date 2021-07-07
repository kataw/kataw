# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/labelled/keywords/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/labelled/keywords/gen/can_not_use_keywords_as_label_name
> :: test: can not use keywords as label name
> :: case: break
## Options

`````js
{}
`````
## Input

`````js
break: x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 150,
            "breakKeyword": {
                "kind": 37757005,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "label": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 0,
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
                "transformFlags": 0,
                "start": 6,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 6,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "break: x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 5, end: 6
✖ A 'break' statement can only jump to a label of an enclosing statement - start: 5, end: 6

```

