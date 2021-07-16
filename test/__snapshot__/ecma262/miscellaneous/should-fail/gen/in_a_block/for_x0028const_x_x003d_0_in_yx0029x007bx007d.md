# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: for (const x = 0 in y){}
## Options

`````js
{}
`````
## Input

`````js
{ for (const x = 0 in y){} }
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
                                "kind": 37757004,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 12
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
                                            "start": 12,
                                            "end": 14
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 12,
                                        "end": 18
                                    }
                                ],
                                "flags": 16777232,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 18
                            },
                            "flags": 33554448,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 18
                        },
                        "inKeyword": {
                            "kind": 21006388,
                            "flags": 64,
                            "transformFlags": 8192,
                            "start": 18,
                            "end": 21
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 23
                        },
                        "statement": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 26
                        },
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 26
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "{ for (const x = 0 in y){} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 12, end: 21

```

