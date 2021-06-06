# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: let g = /* before */function /* a */ ( /* b */ x /* c */ , /* d */ y /* e */ ) /* f */ { /* g */ ; /* h */ ; /* i */ }/* after */;
## Input

`````js
{ let g = /* before */function /* a */ ( /* b */ x /* c */ , /* d */ y /* e */ ) /* f */ { /* g */ ; /* h */ ; /* i */ }/* after */; }
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
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 9,
                                            "end": 30
                                        },
                                        "generatorToken": null,
                                        "name": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 40,
                                                    "end": 50
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 60,
                                                    "end": 70
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 96,
                                            "start": 30,
                                            "end": 80
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 168,
                                                        "flags": 16,
                                                        "start": 90,
                                                        "end": 100
                                                    },
                                                    {
                                                        "kind": 168,
                                                        "flags": 16,
                                                        "start": 100,
                                                        "end": 110
                                                    }
                                                ],
                                                "flags": 32,
                                                "start": 90,
                                                "end": 110
                                            },
                                            "flags": 32,
                                            "start": 80,
                                            "end": 120
                                        },
                                        "typeParameters": null,
                                        "returnType": null,
                                        "flags": 32,
                                        "start": 9,
                                        "end": 120
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 120
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 120
                        },
                        "flags": 33554448,
                        "start": 1,
                        "end": 132
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 132
            },
            "flags": 16,
            "start": 0,
            "end": 134
        }
    ],
    "isModule": false,
    "source": "{ let g = /* before */function /* a */ ( /* b */ x /* c */ , /* d */ y /* e */ ) /* f */ { /* g */ ; /* h */ ; /* i */ }/* after */; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 134
}
```

### Printed

```javascript

{
  let g = function /* a */ (/* b */ x /* c */, /* d */ y /* e */) /* f */ {

  } /* after */;
}
```

### Diagnostics

```javascript
✔ No errors
```

