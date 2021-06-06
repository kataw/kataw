# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: let g = /* before */GeneratorFunction("a", " /* a */ b, c /* b */ //", "/* c */ yield yield; /* d */ //")/* after */;
## Input

`````js
{ let g = /* before */GeneratorFunction("a", " /* a */ b, c /* b */ //", "/* c */ yield yield; /* d */ //")/* after */; }
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
                                        "kind": 134299649,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 7
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "GeneratorFunction",
                                            "rawText": "GeneratorFunction",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 39
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 201392131,
                                                    "text": "a",
                                                    "rawText": "\"a\"",
                                                    "flags": 96,
                                                    "start": 40,
                                                    "end": 43
                                                },
                                                {
                                                    "kind": 201392131,
                                                    "text": " /* a */ b, c /* b */ //",
                                                    "rawText": "\" /* a */ b, c /* b */ //\"",
                                                    "flags": 96,
                                                    "start": 44,
                                                    "end": 71
                                                },
                                                {
                                                    "kind": 201392131,
                                                    "text": "/* c */ yield yield; /* d */ //",
                                                    "rawText": "\"/* c */ yield yield; /* d */ //\"",
                                                    "flags": 96,
                                                    "start": 72,
                                                    "end": 106
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 40,
                                            "end": 106
                                        },
                                        "flags": 268435488,
                                        "start": 9,
                                        "end": 107
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 107
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 107
                        },
                        "flags": 33554448,
                        "start": 1,
                        "end": 119
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 119
            },
            "flags": 16,
            "start": 0,
            "end": 121
        }
    ],
    "isModule": false,
    "source": "{ let g = /* before */GeneratorFunction(\"a\", \" /* a */ b, c /* b */ //\", \"/* c */ yield yield; /* d */ //\")/* after */; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 121
}
```

### Printed

```javascript

{
  let g = GeneratorFunction(
    "\"a\"",
    "\" /* a */ b, c /* b */ //\"",
    "\"/* c */ yield yield; /* d */ //\"",
  ) /* after */;
}
```

### Diagnostics

```javascript
✔ No errors
```

