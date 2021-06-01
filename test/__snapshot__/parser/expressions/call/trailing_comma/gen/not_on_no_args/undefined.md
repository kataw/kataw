# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/expressions/call/trailing_comma/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\call\trailing_comma\gen\not_on_no_args
> :: test: not on no args
> :: case: undefined
## Input

`````js
foo(,);
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 4,
                            "end": 4
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 4,
                    "end": 5
                },
                "flags": 268435488,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "foo(,);",
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

