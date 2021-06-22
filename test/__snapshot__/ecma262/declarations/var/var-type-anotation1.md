# Kataw parser test case

## Input

`````js
var foo = (async (): number => bar);
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 11,
                                    "end": 16
                                },
                                "typeParameters": null,
                                "arrowPatameterList": [],
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 20,
                                        "end": 27
                                    },
                                    "flags": 2097152,
                                    "start": 20,
                                    "end": 27
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 27,
                                    "end": 30
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 30,
                                    "end": 34
                                },
                                "flags": 288,
                                "start": 11,
                                "end": 34
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 35
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "var foo = (async (): number => bar);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

var foo = (async () =>  bar);
```

### Diagnostics

```javascript
✔ No errors
```

