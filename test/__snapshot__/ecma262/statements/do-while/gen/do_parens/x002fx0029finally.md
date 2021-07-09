# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_parens
> :: test: do parens
> :: case: /)finally
## Options

`````js
{}
`````
## Input

`````js
do( /)finally while
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 371,
                        "text": "/)finally while",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 19
                    },
                    "flags": 2,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 19
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2,
                "end": 19
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 19
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "do( /)finally while",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 3, end: 19
✖ Expected a ')' to match the '(' token here - start: 4, end: 19

```

