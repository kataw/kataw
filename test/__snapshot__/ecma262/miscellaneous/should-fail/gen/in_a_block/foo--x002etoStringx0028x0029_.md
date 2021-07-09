# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: foo--.toString();
## Options

`````js
{}
`````
## Input

`````js
{ foo--.toString(); }
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
                            "kind": 127,
                            "operandToken": {
                                "kind": 196636,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 7
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 5
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 7
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 7
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "toString",
                    "rawText": "toString",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 16
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 17
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 8,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 8,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "{ foo--.toString(); }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 7, end: 8
✖ Declaration or statement expected - start: 19, end: 21

```

