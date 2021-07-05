# Kataw parser test case

## Input

`````js
var f = (x): ?(number) => 123 => 123;
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
                                "flags": 32,
                                "start": 9,
                                "end": 22
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134217970,
                                    "nullableToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "type": {
                                        "kind": 290,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 15,
                                            "end": 21
                                        },
                                        "flags": 2097152,
                                        "start": 14,
                                        "end": 22
                                    },
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 22
                                },
                                "flags": 2097152,
                                "start": 12,
                                "end": 22
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 22,
                                "end": 25
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 123,
                                "rawText": "123",
                                "flags": 96,
                                "start": 25,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 123,
                "rawText": "123",
                "flags": 96,
                "start": 32,
                "end": 36
            },
            "flags": 16,
            "start": 32,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "var f = (x): ?(number) => 123 => 123;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 29, end: 32
✖ Expected a `;` - start: 29, end: 32

```

