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
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 31,
                                "end": 34
                            },
                            "typeParameters": null,
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
                            "asyncKeyword": null,
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 261,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 24,
                                        "end": 27
                                    },
                                    "parameters": {
                                        "kind": 208,
                                        "functionTypeParameterList": [
                                            {
                                                "kind": 149,
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
                                                "typeAnnotation": {
                                                    "kind": 134234345,
                                                    "flags": 64,
                                                    "start": 16,
                                                    "end": 23
                                                },
                                                "flags": 0,
                                                "start": 14,
                                                "end": 23
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 14,
                                        "end": 23
                                    },
                                    "returnType": {
                                        "kind": 134217968,
                                        "value": 123,
                                        "flags": 0,
                                        "start": 27,
                                        "end": 31
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 12,
                                    "end": 31
                                },
                                "flags": 0,
                                "start": 11,
                                "end": 31
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

var f = (x) =>  123;
```

### Diagnostics

```javascript
✔ No errors
```

