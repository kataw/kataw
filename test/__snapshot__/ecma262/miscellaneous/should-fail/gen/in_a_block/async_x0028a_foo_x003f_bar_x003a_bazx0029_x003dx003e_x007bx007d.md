# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: async (a, foo ? bar : baz) => {}
## Options

`````js
{}
`````
## Input

`````js
{ async (a, foo ? bar : baz) => {} }
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
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 7
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 10
                                    },
                                    {
                                        "kind": 197,
                                        "shortCircuit": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "questionToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "consequent": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 21
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "alternate": {
                                            "kind": 134299649,
                                            "text": "baz",
                                            "rawText": "baz",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 27
                                        },
                                        "flags": 96,
                                        "transformFlags": 4096,
                                        "start": 11,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 1
                            },
                            "flags": 32,
                            "transformFlags": 1,
                            "start": 1,
                            "end": 28
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 28
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 33,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 31,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "{ async (a, foo ? bar : baz) => {} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '=>' expected - start: 28, end: 31
✖ Declaration or statement expected - start: 34, end: 36

```

