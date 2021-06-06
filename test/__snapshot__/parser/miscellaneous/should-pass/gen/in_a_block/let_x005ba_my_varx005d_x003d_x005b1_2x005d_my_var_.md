# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: let [a, my_var] = [1, 2]; my_var;
## Input

`````js
{ let [a, my_var] = [1, 2]; my_var; }
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
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 202,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 7,
                                                    "end": 8
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "my_var",
                                                    "rawText": "my_var",
                                                    "flags": 96,
                                                    "start": 9,
                                                    "end": 16
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 7,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 17
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 21,
                                                    "end": 22
                                                },
                                                {
                                                    "kind": 201392130,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 96,
                                                    "start": 23,
                                                    "end": 25
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 21,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 19,
                                        "end": 26
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 26
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 26
                        },
                        "flags": 33554448,
                        "start": 1,
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
                "flags": 16,
                "start": 1,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "{ let [a, my_var] = [1, 2]; my_var; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

{
  let [a, my_var] = [1, 2];
  my_var;
}
```

### Diagnostics

```javascript
✔ No errors
```

