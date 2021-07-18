# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/missing_parens_and_block
> :: test: missing parens and block
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
do false while
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
                    "kind": 205586437,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 8
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2,
                "end": 8
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 8,
                "end": 14
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 14,
                "end": 14
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "do false while",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'while' is not allowed here. Did you mean ';'? - start: 8, end: 14

```

