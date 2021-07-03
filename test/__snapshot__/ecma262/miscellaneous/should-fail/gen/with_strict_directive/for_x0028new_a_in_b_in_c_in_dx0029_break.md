# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: for (new a in b in c in d) break
## Options

`````js
{}
`````
## Input

`````js
"use strict"; for (new a in b in c in d) break
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
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 13,
                "end": 17
            },
            "initializer": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "start": 19,
                    "end": 22
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 22,
                    "end": 24
                },
                "argumentList": null,
                "flags": 96,
                "start": 19,
                "end": 24
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 24,
                "end": 27
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 27,
                        "end": 29
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "start": 29,
                        "end": 32
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 32,
                        "end": 34
                    },
                    "flags": 96,
                    "start": 27,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "start": 34,
                    "end": 37
                },
                "right": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 37,
                    "end": 39
                },
                "flags": 96,
                "start": 27,
                "end": 39
            },
            "statement": {
                "kind": 150,
                "breakKeyword": {
                    "kind": 37757005,
                    "flags": 80,
                    "start": 40,
                    "end": 46
                },
                "label": null,
                "flags": 16,
                "start": 40,
                "end": 46
            },
            "flags": 80,
            "start": 13,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; for (new a in b in c in d) break",
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
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 27, end: 29

```

