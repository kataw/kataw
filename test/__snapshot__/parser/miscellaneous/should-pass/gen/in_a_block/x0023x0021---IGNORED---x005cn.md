# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: #!---IGNORED---\n
## Input

`````js
{ #!---IGNORED---\n }
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
                "statements": [],
                "flags": 16,
                "start": 1,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 1
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 3,
                        "end": 4
                    },
                    "operand": {
                        "kind": 128,
                        "operandToken": {
                            "kind": 196636,
                            "flags": 64,
                            "start": 4,
                            "end": 6
                        },
                        "operand": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 100915,
                                "flags": 64,
                                "start": 6,
                                "end": 7
                            },
                            "operand": {
                                "kind": 127,
                                "operandToken": {
                                    "kind": 196636,
                                    "flags": 64,
                                    "start": 14,
                                    "end": 16
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "IGNORED",
                                    "rawText": "IGNORED",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 16
                        },
                        "flags": 32,
                        "start": 4,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 100915,
                    "flags": 64,
                    "start": 16,
                    "end": 17
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 17,
                    "end": 17
                },
                "flags": 32,
                "start": 3,
                "end": 17
            },
            "flags": 16,
            "start": 3,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 18,
                "end": 19
            },
            "flags": 16,
            "start": 18,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "{ #!---IGNORED---\\n }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '#!' can only be used at the start of a file. - start: 2, end: 3
✖ The parser expected to find a '}' to match the '{' token here - start: 1, end: 3
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 16, end: 17
✖ Invalid hexadecimal escape sequence - start: 17, end: 17
✖ Identifier expected - start: 17, end: 18
✖ Declaration or statement expected - start: 19, end: 21

```

