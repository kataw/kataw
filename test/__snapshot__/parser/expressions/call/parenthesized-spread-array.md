# Kataw parser test case

## Input

`````js
var foo = async ([...(foo)]);
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
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 9,
                                "end": 15
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 223,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 0,
                                                        "start": 18,
                                                        "end": 21
                                                    },
                                                    "argument": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 22,
                                                            "end": 25
                                                        },
                                                        "flags": 32,
                                                        "start": 21,
                                                        "end": 26
                                                    },
                                                    "flags": 32,
                                                    "start": 18,
                                                    "end": 26
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 18,
                                            "end": 26
                                        },
                                        "flags": 32,
                                        "start": 17,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 9,
                                "end": 9
                            },
                            "flags": 268435488,
                            "start": 9,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 28
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "var foo = async ([...(foo)]);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

var foo = async([...(foo)]);
```

### Diagnostics

```javascript
✔ No errors
```

