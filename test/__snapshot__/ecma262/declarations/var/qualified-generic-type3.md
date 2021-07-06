# Kataw parser test case

## Input

`````js
var a : A.B<T>
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 145,
                                    "qualification": {
                                        "kind": 134299649,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 9
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 11
                                },
                                "typeParameters": {
                                    "kind": 310,
                                    "typeInstantiations": {
                                        "kind": 309,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "T",
                                                        "rawText": "T",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 12,
                                                        "end": 13
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 12,
                                                    "end": 13
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 12,
                                                "end": 13
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 13
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 11,
                                    "end": 14
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 14
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 14
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 14
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "var a : A.B<T>",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

var a: A.B<T>;
```

### Diagnostics

```javascript
✔ No errors
```

