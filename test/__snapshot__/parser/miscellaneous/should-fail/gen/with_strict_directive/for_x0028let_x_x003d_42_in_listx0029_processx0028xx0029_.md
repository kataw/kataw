# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\with_strict_directive
> :: test: with strict directive
> :: case: for (let x = 42 in list) process(x);
## Input

`````js
"use strict"; for (let x = 42 in list) process(x);
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
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 22,
                            "end": 24
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 42,
                            "rawText": "42",
                            "flags": 96,
                            "start": 26,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 22,
                        "end": 29
                    }
                ],
                "flags": 16777232,
                "start": 22,
                "end": 29
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 29,
                "end": 32
            },
            "expression": {
                "kind": 134299649,
                "text": "list",
                "rawText": "list",
                "flags": 96,
                "start": 32,
                "end": 37
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "process",
                        "rawText": "process",
                        "flags": 96,
                        "start": 38,
                        "end": 46
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 47,
                                "end": 48
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 47,
                        "end": 48
                    },
                    "flags": 268435488,
                    "start": 38,
                    "end": 49
                },
                "flags": 16,
                "start": 38,
                "end": 50
            },
            "flags": 80,
            "start": 13,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; for (let x = 42 in list) process(x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 22, end: 29

```

