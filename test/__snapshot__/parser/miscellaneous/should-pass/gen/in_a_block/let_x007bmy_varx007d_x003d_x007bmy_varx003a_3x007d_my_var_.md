# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: let {my_var} = {my_var: 3}; my_var;
## Input

`````js
{ let {my_var} = {my_var: 3}; my_var; }
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
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 80,
                            "start": 1,
                            "end": 5
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
                                                    "kind": 134299649,
                                                    "text": "my_var",
                                                    "rawText": "my_var",
                                                    "flags": 96,
                                                    "start": 7,
                                                    "end": 13
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 7,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 14
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
                                                        "start": 18,
                                                        "end": 24
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 96,
                                                        "start": 25,
                                                        "end": 27
                                                    },
                                                    "flags": 32,
                                                    "start": 18,
                                                    "end": 27
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 18,
                                            "end": 27
                                        },
                                        "flags": 48,
                                        "start": 16,
                                        "end": 28
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 28
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 28
                        },
                        "flags": 33554448,
                        "start": 1,
                        "end": 29
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "my_var",
                            "rawText": "my_var",
                            "flags": 96,
                            "start": 29,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 29,
                        "end": 37
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "{ let {my_var} = {my_var: 3}; my_var; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

{
  let {
    my_var
  } = { my_var: 3 };
  my_var;
}
```

### Diagnostics

```javascript
✔ No errors
```

