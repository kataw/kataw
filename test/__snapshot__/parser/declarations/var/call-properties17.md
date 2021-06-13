# Kataw parser test case

## Input

`````js
var b: { (x: number): number } = (x) => "hi"
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
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 196,
                                        "protoKeyword": null,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 282,
                                            "parameters": [
                                                {
                                                    "kind": 149,
                                                    "ellipsisToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 10,
                                                        "end": 11
                                                    },
                                                    "optionalToken": null,
                                                    "types": {
                                                        "kind": 134234345,
                                                        "flags": 64,
                                                        "start": 12,
                                                        "end": 19
                                                    },
                                                    "flags": 32,
                                                    "start": 10,
                                                    "end": 19
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 10,
                                            "end": 19
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 21,
                                            "end": 28
                                        },
                                        "flags": 32,
                                        "start": 8,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 6,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 30
                        },
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 36,
                                "end": 39
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 34,
                                    "end": 35
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 201392131,
                                "text": "hi",
                                "rawText": "\"hi\"",
                                "flags": 96,
                                "start": 39,
                                "end": 44
                            },
                            "flags": 32,
                            "start": 32,
                            "end": 44
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 44
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "var b: { (x: number): number } = (x) => \"hi\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

var b = (x) =>  "\"hi\"";
```

### Diagnostics

```javascript
✔ No errors
```

