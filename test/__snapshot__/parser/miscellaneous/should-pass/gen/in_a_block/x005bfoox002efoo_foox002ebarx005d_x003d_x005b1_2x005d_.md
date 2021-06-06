# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: [foo.foo, foo.bar] = [1, 2];
## Input

`````js
{ [foo.foo, foo.bar] = [1, 2]; }
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
                            "kind": 125,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 3,
                                                "end": 6
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 7,
                                                "end": 10
                                            },
                                            "flags": 536870944,
                                            "start": 3,
                                            "end": 10
                                        },
                                        {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 15
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 16,
                                                "end": 19
                                            },
                                            "flags": 536870944,
                                            "start": 11,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 3,
                                    "end": 19
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 20
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 20,
                                "end": 22
                            },
                            "right": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 24,
                                            "end": 25
                                        },
                                        {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 26,
                                            "end": 28
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 24,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 30
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "{ [foo.foo, foo.bar] = [1, 2]; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

{
  [foo.foo, foo.bar] = [1, 2];
}
```

### Diagnostics

```javascript
✔ No errors
```

