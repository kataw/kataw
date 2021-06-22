# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: s = {foo: yield /x/g}
## Options

`````js
{}
`````
## Input

`````js
{ s = {foo: yield /x/g} }
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
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "s",
                                "rawText": "s",
                                "flags": 96,
                                "start": 1,
                                "end": 3
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 3,
                                "end": 5
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "start": 7,
                                                "end": 10
                                            },
                                            "right": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "start": 11,
                                                        "end": 17
                                                    },
                                                    "operatorToken": {
                                                        "kind": 35640,
                                                        "flags": 96,
                                                        "start": 17,
                                                        "end": 19
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 19,
                                                        "end": 20
                                                    },
                                                    "flags": 32,
                                                    "start": 7,
                                                    "end": 20
                                                },
                                                "operatorToken": {
                                                    "kind": 35640,
                                                    "flags": 96,
                                                    "start": 20,
                                                    "end": 21
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "g",
                                                    "rawText": "g",
                                                    "flags": 96,
                                                    "start": 21,
                                                    "end": 22
                                                },
                                                "flags": 32,
                                                "start": 7,
                                                "end": 22
                                            },
                                            "flags": 32,
                                            "start": 7,
                                            "end": 22
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 7,
                                    "end": 22
                                },
                                "flags": 48,
                                "start": 5,
                                "end": 23
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 23
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "{ s = {foo: yield /x/g} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

{
  s = { foo: yield / x / g };
}
```

### Diagnostics

```javascript
✔ No errors
```

