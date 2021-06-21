# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/valid-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/valid-cases/gen/stand_alone
> :: test: stand alone
> :: case: var [{__proto__:a, __proto__:b}] = 0;
## Options

`````js
{}
`````
## Input

`````js
var [{__proto__:a, __proto__:b}] = 0;
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
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "__proto__",
                                                        "rawText": "__proto__",
                                                        "flags": 96,
                                                        "start": 6,
                                                        "end": 15
                                                    },
                                                    "value": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 16,
                                                        "end": 17
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 6,
                                                    "end": 17
                                                },
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "__proto__",
                                                        "rawText": "__proto__",
                                                        "flags": 96,
                                                        "start": 18,
                                                        "end": 28
                                                    },
                                                    "value": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 29,
                                                        "end": 30
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 18,
                                                    "end": 30
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 6,
                                            "end": 30
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 5,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 32
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 34,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 36
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "var [{__proto__:a, __proto__:b}] = 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

var [{
    __proto__: a,
    __proto__: b
  }] = 0;
```

### Diagnostics

```javascript
✔ No errors
```

