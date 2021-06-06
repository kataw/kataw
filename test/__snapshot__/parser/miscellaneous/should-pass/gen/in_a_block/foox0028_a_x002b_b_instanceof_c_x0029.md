# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: foo( a + b instanceof c )
## Input

`````js
{ foo( a + b instanceof c ) }
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
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 64,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "operatorToken": {
                                                "kind": 4229173,
                                                "flags": 64,
                                                "start": 12,
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
                                            "start": 12,
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
    "source": "{ foo( a + b instanceof c ) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

{
  foo(a + b inctanceof c);
}
```

### Diagnostics

```javascript
✔ No errors
```

