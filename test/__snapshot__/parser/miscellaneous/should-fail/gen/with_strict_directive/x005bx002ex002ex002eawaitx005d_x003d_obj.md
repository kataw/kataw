# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: [...await] = obj
## Options

`````js
{}
`````
## Input

`````js
"use strict"; [...await] = obj
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 15,
                                    "end": 18
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "start": 18,
                                    "end": 23
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 15,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 24
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 24,
                    "end": 26
                },
                "right": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 96,
                    "start": 26,
                    "end": 30
                },
                "flags": 32,
                "start": 13,
                "end": 30
            },
            "flags": 16,
            "start": 13,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; [...await] = obj",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

[...await] = obj;
```

### Diagnostics

```javascript
✔ No errors
```

