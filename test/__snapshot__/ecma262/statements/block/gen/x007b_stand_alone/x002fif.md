# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: /if
## Options

`````js
{}
`````
## Input

`````js
{ /if
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 371,
                            "text": "/if",
                            "flags": 96,
                            "start": 1,
                            "end": 5
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 5
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "{ /if",
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
✖ Unterminated regular expression - start: 1, end: 5
✖ The parser expected to find a '}' to match the '{' token here - start: 2, end: 5

```

