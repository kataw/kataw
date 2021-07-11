# Kataw parser test case

## Input

`````js
var f = (x): (x: number) => 123 => 123;
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
                                "end": 31
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 288,
                                    "typeParameters": null,
                                    "arrowTypeParameterList": {
                                        "kind": 292,
                                        "parameters": [
                                            {
                                                "kind": 284,
                                                "ellipsisToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 14,
                                                    "end": 15
                                                },
                                                "optionalToken": null,
                                                "types": {
                                                    "kind": 139,
                                                    "bitwiseOrToken": null,
                                                    "bitwiseAndToken": null,
                                                    "type": {
                                                        "kind": 134234345,
                                                        "flags": 2097216,
                                                        "start": 16,
                                                        "end": 23
                                                    },
                                                    "flags": 2097152,
                                                    "start": 16,
                                                    "end": 23
                                                },
                                                "flags": 2097152,
                                                "start": 12,
                                                "end": 23
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 12,
                                        "end": 23
                                    },
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 24,
                                        "end": 27
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
                                            "start": 27,
                                            "end": 31
                                        },
                                        "flags": 2097152,
                                        "start": 27,
                                        "end": 31
                                    },
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 31
                                },
                                "flags": 2097152,
                                "start": 12,
                                "end": 31
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 31,
                                "end": 34
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 123,
                                "rawText": "123",
                                "flags": 96,
                                "start": 34,
                                "end": 38
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 38
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 38
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "var f = (x): (x: number) => 123 => 123;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

var  f = ( x ) => 123 ;

```

### Diagnostics

```javascript
✔ No errors
```

