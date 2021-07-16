# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/destructuring-assignment-positive-tests/gen/strict_directive_variable_in_for_in
> :: test: strict directive variable in for in
> :: case: { x: new.target = 1 }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var x, y, z; for ({ x: new.target = 1 } in {});
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
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 17
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 19
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 22
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 20,
                        "end": 22
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 25
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 23,
                        "end": 25
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 26
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 26,
                "end": 30
            },
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asteriskToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 35
                            },
                            "right": {
                                "kind": 125,
                                "left": {
                                    "kind": 211,
                                    "newKeyword": {
                                        "kind": 138477661,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 40
                                    },
                                    "targetIdentifier": {
                                        "kind": 16594,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 47
                                    },
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 47
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 49
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 51
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 33,
                                "end": 51
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 33,
                            "end": 51
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 51
                },
                "flags": 48,
                "transformFlags": 8,
                "start": 32,
                "end": 53
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 8192,
                "start": 53,
                "end": 56
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 58
                },
                "flags": 48,
                "transformFlags": 8,
                "start": 56,
                "end": 59
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 60,
                "end": 61
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 26,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "'use strict'; var x, y, z; for ({ x: new.target = 1 } in {});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'new.target' only allowed within functions - start: 36, end: 49
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 47, end: 49
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 56, end: 58

```

