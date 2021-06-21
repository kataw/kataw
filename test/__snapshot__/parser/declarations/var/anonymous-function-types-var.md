# Kataw parser test case

## Input

`````js
var f = (x): | 1 | 2 => 1;

var f = (): (number) => 123;
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
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": {
                                    "kind": 134251592,
                                    "flags": 64,
                                    "start": 12,
                                    "end": 14
                                },
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 134217968,
                                            "text": 1,
                                            "flags": 2097216,
                                            "start": 14,
                                            "end": 16
                                        },
                                        {
                                            "kind": 134217968,
                                            "text": 2,
                                            "flags": 2097216,
                                            "start": 18,
                                            "end": 20
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 16,
                                    "end": 20
                                },
                                "flags": 2097152,
                                "start": 12,
                                "end": 20
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 20,
                                "end": 23
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 26
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 26,
                "end": 31
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
                            "start": 31,
                            "end": 33
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": [],
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 290,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 41,
                                        "end": 47
                                    },
                                    "flags": 2097152,
                                    "start": 39,
                                    "end": 48
                                },
                                "flags": 2097152,
                                "start": 39,
                                "end": 48
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 48,
                                "end": 51
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 123,
                                "rawText": "123",
                                "flags": 96,
                                "start": 51,
                                "end": 55
                            },
                            "flags": 32,
                            "start": 35,
                            "end": 55
                        },
                        "flags": 16,
                        "start": 31,
                        "end": 55
                    }
                ],
                "flags": 16,
                "start": 31,
                "end": 55
            },
            "flags": 16,
            "start": 26,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "var f = (x): | 1 | 2 => 1;\n\nvar f = (): (number) => 123;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

 var f = (x): | ,  =>1;, var f = (): (number) =>123; 
```

### Diagnostics

```javascript
✔ No errors
```

