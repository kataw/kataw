# Kataw parser test case

## Input

`````js
var f = (x): ((number) => 123) => 123;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 9,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 9,
                                "end": 30
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 290,
                                    "type": {
                                        "kind": 288,
                                        "typeParameters": null,
                                        "arrowTypeParameterList": {
                                            "kind": 292,
                                            "parameters": [
                                                {
                                                    "kind": 134234345,
                                                    "flags": 64,
                                                    "start": 15,
                                                    "end": 21
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "start": 12,
                                            "end": 25
                                        },
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 22,
                                            "end": 25
                                        },
                                        "returnType": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134217968,
                                                "text": 123,
                                                "rawText": "123",
                                                "flags": 2097216,
                                                "start": 25,
                                                "end": 29
                                            },
                                            "flags": 2097152,
                                            "start": 25,
                                            "end": 29
                                        },
                                        "flags": 2097152,
                                        "start": 12,
                                        "end": 29
                                    },
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 30
                                },
                                "flags": 2097152,
                                "start": 12,
                                "end": 30
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 30,
                                "end": 33
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 123,
                                "rawText": "123",
                                "flags": 96,
                                "start": 33,
                                "end": 37
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 37
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "var f = (x): ((number) => 123) => 123;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

var f = () =>  123;
```

### Diagnostics

```javascript
✔ No errors
```

