# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/error-recovery/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/error-recovery/gen/ax002f_case
> :: test: a/ case
> :: case: do while
## Options

`````js
{}
`````
## Input

`````js
do while
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
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 8
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "statement": {
                    "kind": 120,
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 8
                    },
                    "flags": 16,
                    "transformFlags": 4096,
                    "start": 8,
                    "end": 8
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 2,
                "end": 8
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 8,
                "end": 8
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "do while",
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
✖ Missing an opening parentheses - '( - start: 3, end: 8

```

