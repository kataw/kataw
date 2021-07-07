# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function f() {
>            let { [await "a"]: a } = { a: 1 };
>            return a;
>          }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; async function f() {
  let { [await "a"]: a } = { a: 1 };
  return a;
}
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 28
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 28,
                "end": 30
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 31,
                "end": 31
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 40
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 329,
                                                        "key": {
                                                            "kind": 194,
                                                            "expression": {
                                                                "kind": 208,
                                                                "awaitKeyword": {
                                                                    "kind": 82196,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 44,
                                                                    "end": 49
                                                                },
                                                                "expression": {
                                                                    "kind": 201392131,
                                                                    "text": "a",
                                                                    "rawText": "\"a\"",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 49,
                                                                    "end": 53
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 44,
                                                                "end": 53
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 42,
                                                            "end": 54
                                                        },
                                                        "value": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 55,
                                                            "end": 57
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 42,
                                                        "end": 57
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 42,
                                                "end": 57
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 59
                                        },
                                        "type": null,
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
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 63,
                                                            "end": 65
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 66,
                                                            "end": 68
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 63,
                                                        "end": 68
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 63,
                                                "end": 68
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 61,
                                            "end": 70
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 40,
                                        "end": 70
                                    }
                                ],
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 70
                            },
                            "flags": 33554448,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 71
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 71,
                                "end": 80
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 82
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 71,
                            "end": 83
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 83
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 32,
                "end": 85
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 13,
            "end": 85
        }
    ],
    "isModule": false,
    "source": "'use strict'; async function f() {\n  let { [await \"a\"]: a } = { a: 1 };\n  return a;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript

"'use strict'";
async function f() {
  let { [await "\"a\""]: a } = { a: 1 };
  return a;
}
```

### Diagnostics

```javascript
✔ No errors
```

