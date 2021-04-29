# Kataw parser test case

## Input

`````js
var x = {
    this
};

`````

## Output

### Hybrid CST

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
                            "text": "x",
                            "rawText": "x",
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
                                        "kind": 134299649,
                                        "text": "this",
                                        "rawText": "this",
                                        "flags": 96,
                                        "start": 9,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 9,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 20
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 20
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "var x = {\n    this\n};\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 18, end: 20

```

