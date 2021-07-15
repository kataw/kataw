# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: for (let x = 42 in list) process(x);
## Options

`````js
{}
`````
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
                            "transformFlags": 0,
                            "start": 1,
                            "end": 5
                        },
                        "initializer": {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 10
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 42,
                                            "rawText": "42",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 17
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 10,
                                        "end": 17
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 17
                            },
                            "flags": 33554448,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 17
                        },
                        "inKeyword": {
                            "kind": 21006388,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 20
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "list",
                            "rawText": "list",
                            "flags": 96,
                            "transformFlags": 0,
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
                                    "transformFlags": 0,
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
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 36
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 36
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 26,
                                "end": 37
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 26,
                            "end": 38
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 38
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "{ for (let x = 42 in list) process(x); }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 10, end: 20

```

