# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/valid-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/valid-cases/gen/stand_alone
> :: test: stand alone
> :: case: function f( { __proto__: x, __proto__: y, ...z} ) {}
## Options

`````js
{}
`````
## Input

`````js
function f( { __proto__: x, __proto__: y, ...z} ) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 329,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 23
                                    },
                                    "value": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 13,
                                    "end": 26
                                },
                                {
                                    "kind": 329,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 27,
                                        "end": 37
                                    },
                                    "value": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 27,
                                    "end": 40
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 41,
                                        "end": 45
                                    },
                                    "left": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 45,
                                        "end": 46
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": null,
                                    "flags": 0,
                                    "start": 41,
                                    "end": 46
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 13,
                            "end": 46
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 47
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 47
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 51,
                    "end": 51
                },
                "flags": 32,
                "start": 49,
                "end": 52
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "function f( { __proto__: x, __proto__: y, ...z} ) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  function f({ __proto__: x, __proto__: y, ...z }) {}

```

### Diagnostics

```javascript
✔ No errors
```

