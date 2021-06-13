# Kataw parser test case

## Input

`````js
var f = (): string | (number) => 123;
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
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 29,
                                "end": 32
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncKeyword": null,
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 11,
                                            "end": 18
                                        },
                                        {
                                            "kind": 260,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 22,
                                                "end": 28
                                            },
                                            "flags": 32,
                                            "start": 20,
                                            "end": 29
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 18,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 10,
                                "end": 29
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 123,
                                "rawText": "123",
                                "flags": 96,
                                "start": 32,
                                "end": 36
                            },
                            "flags": 32,
                            "start": 7,
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
    "source": "var f = (): string | (number) => 123;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
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

