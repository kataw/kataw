# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: a + typeof b += c in d
## Options

`````js
{}
`````
## Input

`````js
{ a + typeof b += c in d }
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
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 3
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 5
                            },
                            "right": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 138477613,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 12
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 14
                                },
                                "flags": 32,
                                "transformFlags": 16384,
                                "start": 5,
                                "end": 14
                            },
                            "flags": 96,
                            "transformFlags": 5120,
                            "start": 1,
                            "end": 14
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 14
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 22
                },
                "right": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 24
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 17,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "{ a + typeof b += c in d }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '+=' expected - start: 14, end: 17
✖ Declaration or statement expected - start: 24, end: 26

```

