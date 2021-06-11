# Kataw parser test case

## Input

`````js
var a: (() => number) | () => string
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 260,
                                        "type": {
                                            "kind": 261,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 10,
                                                "end": 13
                                            },
                                            "parameters": {
                                                "kind": 208,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 9,
                                                "end": 9
                                            },
                                            "returnType": {
                                                "kind": 134234345,
                                                "flags": 64,
                                                "start": 13,
                                                "end": 20
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 8,
                                            "end": 20
                                        },
                                        "flags": 0,
                                        "start": 6,
                                        "end": 21
                                    },
                                    {
                                        "kind": 261,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 26,
                                            "end": 29
                                        },
                                        "parameters": {
                                            "kind": 208,
                                            "parameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 25,
                                            "end": 25
                                        },
                                        "returnType": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 29,
                                            "end": 36
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 23,
                                        "end": 36
                                    }
                                ],
                                "flags": 0,
                                "start": 21,
                                "end": 36
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 36
                        },
                        "initializer": null,
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
            "end": 36
        }
    ],
    "isModule": false,
    "source": "var a: (() => number) | () => string",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

var a;
```

### Diagnostics

```javascript
✔ No errors
```

