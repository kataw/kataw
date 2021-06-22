# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/failing-cases/gen/for_in_statement
> :: test: for in statement
> :: case: function () { for (const x in { a: x }) { } }
## Options

`````js
{}
`````
## Input

`````js
for(function () { for (const x in { a: x }) { } } in y);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 177,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 4,
                    "end": 12
                },
                "asteriskToken": null,
                "name": null,
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 12,
                    "end": 15
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 166,
                                "forKeyword": {
                                    "kind": 37757017,
                                    "flags": 80,
                                    "start": 17,
                                    "end": 21
                                },
                                "initializer": {
                                    "kind": 162,
                                    "lexicalKeyword": {
                                        "kind": 37757004,
                                        "flags": 64,
                                        "start": 23,
                                        "end": 28
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
                                                    "start": 28,
                                                    "end": 30
                                                },
                                                "type": null,
                                                "initializer": null,
                                                "flags": 16,
                                                "start": 28,
                                                "end": 30
                                            }
                                        ],
                                        "flags": 16777232,
                                        "start": 28,
                                        "end": 30
                                    },
                                    "flags": 33554448,
                                    "start": 17,
                                    "end": 30
                                },
                                "inKeyword": {
                                    "kind": 21006388,
                                    "flags": 64,
                                    "start": 30,
                                    "end": 33
                                },
                                "expression": {
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
                                                    "start": 35,
                                                    "end": 37
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 38,
                                                    "end": 40
                                                },
                                                "flags": 32,
                                                "start": 35,
                                                "end": 40
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 35,
                                        "end": 40
                                    },
                                    "flags": 48,
                                    "start": 33,
                                    "end": 42
                                },
                                "statement": {
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
                                    "end": 47
                                },
                                "flags": 80,
                                "start": 17,
                                "end": 47
                            }
                        ],
                        "flags": 32,
                        "start": 17,
                        "end": 47
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 49
                },
                "returnType": null,
                "flags": 32,
                "start": 4,
                "end": 49
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 49,
                "end": 52
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 52,
                "end": 54
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 55,
                "end": 56
            },
            "flags": 80,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "for(function () { for (const x in { a: x }) { } } in y);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 52, end: 54

```

