# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: async (foo ? bar : baz, a) => {
## Options

`````js
{}
`````
## Input

`````js
"use strict"; async (foo ? bar : baz, a) => {
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
            "kind": 120,
            "expression": {
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
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 21,
                                "end": 24
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 24,
                                "end": 26
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 26,
                                "end": 30
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 30,
                                "end": 32
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "baz",
                                "rawText": "baz",
                                "flags": 96,
                                "start": 32,
                                "end": 36
                            },
                            "flags": 96,
                            "start": 21,
                            "end": 36
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 37,
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
            "flags": 16,
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
            "end": 45
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; async (foo ? bar : baz, a) => {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 40, end: 43
✖ The parser expected to find a '}' to match the '{' token here - start: 44, end: 45

```

