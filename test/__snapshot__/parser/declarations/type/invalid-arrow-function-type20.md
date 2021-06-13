# Kataw parser test case

## Input

`````js
var f = (x): (number) => 123 => 123;
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
                                "start": 21,
                                "end": 24
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
                                    "kind": 260,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 14,
                                        "end": 20
                                    },
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 21
                                },
                                "flags": 2097152,
                                "start": 11,
                                "end": 21
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 123,
                                "rawText": "123",
                                "flags": 96,
                                "start": 24,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 7,
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
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 123,
                "rawText": "123",
                "flags": 96,
                "start": 31,
                "end": 35
            },
            "flags": 16,
            "start": 31,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "var f = (x): (number) => 123 => 123;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 28, end: 31
✖ Expected a `;` - start: 28, end: 31

```

