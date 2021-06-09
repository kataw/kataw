# Kataw parser test case

## Input

`````js
var a = {
  br\u{65}ak: 2
};
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
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
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
                                            "text": "break",
                                            "rawText": "br\\u{65}ak",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 22
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 8225,
                                        "start": 9,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 8209,
                                "start": 9,
                                "end": 25
                            },
                            "flags": 8241,
                            "start": 7,
                            "end": 27
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 27
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "var a = {\n  br\\u{65}ak: 2\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

var a = { break: 2 };
```

### Diagnostics

```javascript
✔ No errors
```

