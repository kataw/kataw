# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: foo( a instanceof b + c )
## Input

`````js
{ foo( a instanceof b + c ) }
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
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 1,
                                "end": 5
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 6,
                                                "end": 8
                                            },
                                            "operatorToken": {
                                                "kind": 4229173,
                                                "flags": 64,
                                                "start": 8,
                                                "end": 19
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 19,
                                                "end": 21
                                            },
                                            "flags": 32,
                                            "start": 6,
                                            "end": 21
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 64,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 6,
                                "end": 25
                            },
                            "flags": 268435488,
                            "start": 1,
                            "end": 27
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 27
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "{ foo( a instanceof b + c ) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

{
  foo(a inctanceof b + c);
}
```

### Diagnostics

```javascript
✔ No errors
```

