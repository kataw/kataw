# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\in_a_block
> :: test: in a block
> :: case: for (let x = 42 in list) process(x);
## Input

`````js
{ for (let x = 42 in list) process(x); }
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
                        "kind": 166,
                        "forKeyword": {
                            "kind": 37757017,
                            "flags": 80,
                            "start": 1,
                            "end": 5
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
                                        "start": 10,
                                        "end": 12
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 96,
                                        "start": 14,
                                        "end": 17
                                    },
                                    "flags": 16,
                                    "start": 10,
                                    "end": 17
                                }
                            ],
                            "flags": 16777232,
                            "start": 10,
                            "end": 17
                        },
                        "inKeyword": {
                            "kind": 21006388,
                            "flags": 64,
                            "start": 17,
                            "end": 20
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "list",
                            "rawText": "list",
                            "flags": 96,
                            "start": 20,
                            "end": 25
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
                                    "start": 26,
                                    "end": 34
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 35,
                                            "end": 36
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 35,
                                    "end": 36
                                },
                                "flags": 268435488,
                                "start": 26,
                                "end": 37
                            },
                            "flags": 16,
                            "start": 26,
                            "end": 38
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 38
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "{ for (let x = 42 in list) process(x); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 10, end: 17

```

