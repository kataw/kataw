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
                "transformFlags": 0,
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
                            "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 21
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 290,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 20
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 21
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 21
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 24
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 123,
                                "rawText": "123",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 28
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 28
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 28
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
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
                "transformFlags": 0,
                "start": 31,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 31,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "var f = (x): (number) => 123 => 123;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Variable declaration not allowed at this location - start: 28, end: 31
✖ '=>' is not allowed here. Did you mean ';'? - start: 28, end: 31

```

