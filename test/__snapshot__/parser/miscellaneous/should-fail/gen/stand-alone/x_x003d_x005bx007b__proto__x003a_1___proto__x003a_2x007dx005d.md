# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: x = [{__proto__: 1, __proto__: 2}]
## Options

`````js
{}
`````
## Input

`````js
x = [{__proto__: 1, __proto__: 2}]
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "__proto__",
                                                "rawText": "__proto__",
                                                "flags": 96,
                                                "start": 6,
                                                "end": 15
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 16,
                                                "end": 18
                                            },
                                            "flags": 36,
                                            "start": 6,
                                            "end": 18
                                        },
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "__proto__",
                                                "rawText": "__proto__",
                                                "flags": 96,
                                                "start": 19,
                                                "end": 29
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 96,
                                                "start": 30,
                                                "end": 32
                                            },
                                            "flags": 36,
                                            "start": 19,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 20,
                                    "start": 6,
                                    "end": 32
                                },
                                "flags": 52,
                                "start": 5,
                                "end": 33
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 5,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 34
                },
                "flags": 32,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "x = [{__proto__: 1, __proto__: 2}]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

x = [{ __proto__: 1, __proto__: 2 }];
```

### Diagnostics

```javascript
✔ No errors
```

