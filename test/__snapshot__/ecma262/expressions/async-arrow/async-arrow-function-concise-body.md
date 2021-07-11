# Kataw parser test case

## Input

`````js
var a = async (options = {}) => options;
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
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 7,
                                "end": 13
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "options",
                                            "rawText": "options",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 22
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 26,
                                                "end": 26
                                            },
                                            "flags": 48,
                                            "start": 24,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 15,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 15,
                                "end": 28
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 28,
                                "end": 31
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "options",
                                "rawText": "options",
                                "flags": 96,
                                "start": 31,
                                "end": 39
                            },
                            "flags": 290,
                            "start": 7,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 39
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "var a = async (options = {}) => options;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

var  a = async ( options = {} ) => options ;

```

### Diagnostics

```javascript
✔ No errors
```

