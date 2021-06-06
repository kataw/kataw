# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\with_strict_directive
> :: test: with strict directive
> :: case: async (a, foo ? bar : baz) => {}
## Input

`````js
"use strict"; async (a, foo ? bar : baz) => {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 13,
                "end": 19
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 21,
                        "end": 22
                    },
                    {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 23,
                            "end": 27
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 27,
                            "end": 29
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 29,
                            "end": 33
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 33,
                            "end": 35
                        },
                        "alternate": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "start": 35,
                            "end": 39
                        },
                        "flags": 32,
                        "start": 23,
                        "end": 39
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 13
            },
            "flags": 268435488,
            "start": 13,
            "end": 40
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 45,
                "end": 45
            },
            "flags": 16,
            "start": 43,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; async (a, foo ? bar : baz) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 40, end: 43

```

