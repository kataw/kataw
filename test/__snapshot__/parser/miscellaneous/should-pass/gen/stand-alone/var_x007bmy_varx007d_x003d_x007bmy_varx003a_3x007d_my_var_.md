# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: var {my_var} = {my_var: 3}; my_var;
## Options

`````js
{}
`````
## Input

`````js
var {my_var} = {my_var: 3}; my_var;
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
                                        "kind": 134299649,
                                        "text": "my_var",
                                        "rawText": "my_var",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 12
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
                                            "text": "my_var",
                                            "rawText": "my_var",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 22
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 16,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 16,
                                "end": 25
                            },
                            "flags": 48,
                            "start": 14,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "my_var",
                "rawText": "my_var",
                "flags": 96,
                "start": 27,
                "end": 34
            },
            "flags": 16,
            "start": 27,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "var {my_var} = {my_var: 3}; my_var;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

var {
  my_var
} = { my_var: 3 };
my_var;
```

### Diagnostics

```javascript
✔ No errors
```

