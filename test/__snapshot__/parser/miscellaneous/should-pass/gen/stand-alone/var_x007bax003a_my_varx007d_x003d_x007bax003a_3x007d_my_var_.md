# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: var {a: my_var} = {a: 3}; my_var;
## Options

`````js
{}
`````
## Input

`````js
var {a: my_var} = {a: 3}; my_var;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "my_var",
                                            "rawText": "my_var",
                                            "flags": 96,
                                            "start": 7,
                                            "end": 14
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "generatorToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 19,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 19,
                                "end": 23
                            },
                            "flags": 48,
                            "start": 17,
                            "end": 24
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 24
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "my_var",
                "rawText": "my_var",
                "flags": 96,
                "start": 25,
                "end": 32
            },
            "flags": 16,
            "start": 25,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "var {a: my_var} = {a: 3}; my_var;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

var {
  a: my_var
} = { a: 3 };
my_var;
```

### Diagnostics

```javascript
✔ No errors
```

