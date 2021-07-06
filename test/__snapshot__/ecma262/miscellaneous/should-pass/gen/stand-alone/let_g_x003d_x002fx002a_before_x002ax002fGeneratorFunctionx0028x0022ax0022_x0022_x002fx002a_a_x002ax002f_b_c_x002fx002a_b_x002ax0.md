# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: let g = /* before */GeneratorFunction("a", " /* a */ b, c /* b */ //", "/* c */ yield yield; /* d */ //")/* after */;
## Options

`````js
{}
`````
## Input

`````js
let g = /* before */GeneratorFunction("a", " /* a */ b, c /* b */ //", "/* c */ yield yield; /* d */ //")/* after */;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
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
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "GeneratorFunction",
                                "rawText": "GeneratorFunction",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 37
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "\"a\"",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 41
                                    },
                                    {
                                        "kind": 201392131,
                                        "text": " /* a */ b, c /* b */ //",
                                        "rawText": "\" /* a */ b, c /* b */ //\"",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 42,
                                        "end": 69
                                    },
                                    {
                                        "kind": 201392131,
                                        "text": "/* c */ yield yield; /* d */ //",
                                        "rawText": "\"/* c */ yield yield; /* d */ //\"",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 70,
                                        "end": 104
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 104
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 7,
                            "end": 105
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 105
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 105
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 117
        }
    ],
    "isModule": false,
    "source": "let g = /* before */GeneratorFunction(\"a\", \" /* a */ b, c /* b */ //\", \"/* c */ yield yield; /* d */ //\")/* after */;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 117
}
```

### Printed

```javascript
let g = GeneratorFunction(
    "\"a\"",
    "\" /* a */ b, c /* b */ //\"",
    "\"/* c */ yield yield; /* d */ //\""
  );
```

### Diagnostics

```javascript
✔ No errors
```

