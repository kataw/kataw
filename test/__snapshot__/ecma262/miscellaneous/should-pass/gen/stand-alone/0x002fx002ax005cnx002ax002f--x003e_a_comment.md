# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: 0/*\n*/--> a comment
## Options

`````js
{}
`````
## Input

`````js
0/*\n*/--> a comment
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
                "kind": 198,
                "left": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196636,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 9
                    },
                    "operand": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 10
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "flags": 32,
                "transformFlags": 5120,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "comment",
                "rawText": "comment",
                "flags": 96,
                "transformFlags": 0,
                "start": 12,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 12,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "0/*\\n*/--> a comment",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 1, end: 9
✖ Expected a `;` - start: 12, end: 20

```

